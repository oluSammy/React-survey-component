import React, { useState, useEffect } from 'react'
import questionStyles from './question.styles';
import HelpIcon from '@material-ui/icons/Help';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import MenuItem from '@material-ui/core/MenuItem';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ICurrentQuestion, IAnswer } from '../../types/types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { motion } from 'framer-motion';
import { pageTransition, transit } from '../../utils/animate';
import clsx from 'clsx';

type Props = {
  currentQuestion: ICurrentQuestion,
  progress: number;
  handleNext: (arg: IAnswer) => void;
  answeredQuestions: IAnswer[];
  handlePrev: () => void;
  questionNumber: number;
  totalQuestion: number
}

const Question: React.FC<Props> = ({
  currentQuestion,
  progress,
  handleNext,
  handlePrev,
  answeredQuestions,
  questionNumber,
  totalQuestion
}) => {
  // state
  const { label, options, placeholder, type, questionsOnValue } = currentQuestion;
  const [answer, setAnswer] = useState<string | boolean >('');
  const [validationError, setValidationError] = useState('');
  const [otherArea, setOtherArea] = useState('');

  // css
  const classes = questionStyles();

  // sets validation error and answer
  useEffect(() => {
    setValidationError('');
    const prevAnswer = answeredQuestions.find(quest => quest.label === label);
    if (prevAnswer) {
      setAnswer(prevAnswer.answer as string)
    }

  }, [answeredQuestions, label, options, questionsOnValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // checkbox
    if (event.target.type === 'checkbox') {
      console.log(event.target.checked)
      setAnswer(event.target.checked);
    } else {
      setAnswer(event.target.value);
    }
  };

  // event handler for specifying others in select option
  const handleOtherArea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherArea(event.target.value);
    setAnswer(event.target.value);
  }

  // event handler to handle next question and validate input
  const handleSubmit = () => {
    if (type === 'phone') {
      if (!isValidPhoneNumber(answer as string)) {
        setValidationError('please provide a valid phone number')
        return;
      }
    }
    if (currentQuestion.validation) {
      const isValid = currentQuestion.validation(answer as string);
      if (!isValid) {
        setValidationError('please provide a valid input')
        return;
      }
    }
    handleNext({ ...currentQuestion, answer });
    if (progress < 98) setAnswer('');
  }

  // event handler to handle phone input
  const handlePhoneNO = (e: string) => {
    setAnswer(e);
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transit}
    >
      <div className={classes.question}>
        <div className={classes.questionBox}>
          <HelpIcon className={classes.questionIcon} />
          <h2 className={classes.questionTitle}>Question</h2>
        </div>
        <div className={classes.questionDetail}>
          <p>{label}</p>
          {
            // input for text, number, email and textarea
            (type === 'text' || type === 'number' || type === 'email' || type === 'multiline') &&
            <TextField
              id='firstName'
              label={placeholder}
              variant='outlined'
              className={classes.numberTxt}
              fullWidth
              type={type && type}
              multiline={type === 'multiline'}
              name='firstName'
              value={answer}
              onChange={handleChange}
            />
          }

          {/* input for text, number, email and textarea */}
          {type === 'phone' &&
          <div>
            <PhoneInput
              placeholder="Enter phone number"
              value={answer as string}
              onChange={handlePhoneNO}
              className={classes.phoneInput}
            />
            <p className={classes.phoneHelperText} >click phone icon to select country</p>
          </div>
          }

          {/* input for first question, (casting question) */}
          {type === 'select' && questionsOnValue &&
            <TextField
              select
              label={placeholder}
              fullWidth
              color='primary'
              value={answer}
              onChange={handleChange}
              variant='outlined'
            >
              {options && options.map((option) => (
                <MenuItem key={option.value} value={option.value || option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          }

          {/* input for select */}
          {type === 'select' && !questionsOnValue &&
            <TextField
              select
              label={placeholder}
              fullWidth
              color='primary'
              value={answer}
              onChange={handleChange}
              variant='outlined'
            >
              {options && options.map((option) =>{
                if (option.label !== 'Other (please specify).') {
                  return <MenuItem key={option.value} value={option.value || option.label}>
                    {option.label}
                  </MenuItem>
                }
                return (
                  <MenuItem key={option.value} value=''>
                  </MenuItem>
                )
              }
              )}
            </TextField>
          }
          {/* input for specify other */}
          {
            type === 'select' && !questionsOnValue &&
            <div className={classes.specify}>
              <TextField
                id='firstName'
                label='other, specify'
                variant='outlined'
                className={clsx(classes.numberTxt)}
                fullWidth
                type={type && type}
                name='firstName'
                value={otherArea}
                onChange={handleOtherArea}
              />
            </div>
          }
          {type === 'radio' &&
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" color="primary" value={answer} onChange={handleChange}>
              <FormControlLabel value="Yes" color="primary" control={<Radio color="primary" />} label="yes" />
              <FormControlLabel value="No" color="primary" control={<Radio color="primary" />} label="no" />
            </RadioGroup>
          </FormControl>
          }
          {
            type === 'checkbox' &&
            <Checkbox
              checked={answer as boolean}
              color="primary"
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
        </div>
        <p className={classes.errMsg}>{validationError}</p>
      </div>
      <div className={classes.navigation}>
        <Button
          className={classes.navBtn}
          variant="contained"
          disableElevation
          color="primary"
          startIcon={<NavigateBeforeIcon />}
          disabled={progress === 0 || label === 'Are you nominating yourself or someone else?'}
          onClick={handlePrev}
        >
          Prev
        </Button>
        <Button
          className={classes.navBtn}
          variant="contained"
          disableElevation
          color="primary"
          endIcon={<NavigateNextIcon />}
          disabled={answer ? false : true}
          onClick={handleSubmit}
        >
          {(questionNumber > 0) && (questionNumber === totalQuestion) ? 'Submit': 'Next' }
        </Button>
      </div>
    </motion.div>
  )
}

export default Question
