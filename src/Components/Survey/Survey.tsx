import React, { useState, useEffect } from "react"
import LinearProgress from '@material-ui/core/LinearProgress';
import surveyStyles from './Survey.styles';
import Question from "../Question/Question";
import { ICastingQuestions, ISurveyQuestion, ICurrentQuestion, IAnswer } from '../../types/types';
import SurveyResults from '../SurveyResults/SurveyResults';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


type Props = {
  questions: ICastingQuestions[]
}

const Survey: React.FC<Props> = ({ questions }) => {

  // state
  const [progress, setProgress] = useState(0);
  const [allQuestions, setAllQuestions] = useState<ISurveyQuestion[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [allAnswers, setAllAnswers] = useState<IAnswer[] | []>([])
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<ICurrentQuestion>({
    label: '',
    options: [],
    placeholder: '',
    type: ''
  });
  const [backdrop, setBackdrop] = React.useState(false);

  // css
  const classes = surveyStyles();

  useEffect(() => {
    // set question 1 to casting question
    if (progress === 0) {
    setCurrentQuestion({
      label: questions[0].label,
      options: questions[0].options,
      placeholder: questions[0].placeholder,
      type: questions[0].type,
      questionsOnValue: questions[0].questionsOnValue,
    })
  };
  }, [progress, questions]);

  const handleNext = (answer: IAnswer) => {

    if (progress === 0 || answer.label === 'Are you nominating yourself or someone else?') {
        // check if question has been answered and replace answer
        const answeredQ = allAnswers.find(ans => ans.label === answer.label);
        if (answeredQ) {
          // if answer is different from prev answer replace questions and set current question
          if (answeredQ.answer !== answer.answer) {
            const nextQuestions = currentQuestion.questionsOnValue!(answer.answer as string)
            setAllQuestions([...nextQuestions]);

            const increment = 100 / (nextQuestions.length)
            setQuestionNumber(1);
            setProgress(increment);
            setAllAnswers([answer])
            setCurrentQuestion(nextQuestions[0])

            return
          }
          const idx = allAnswers.findIndex(ans => ans.label === answer.label);
          const copiedAnswers = [...allAnswers];
          copiedAnswers[idx] = answer;
          setAllAnswers(copiedAnswers)
        } else {
          setAllAnswers([...allAnswers, answer])
        }
        const nextQuestions = currentQuestion.questionsOnValue!(answer.answer as string)
        setAllQuestions([...nextQuestions]);

        const increment = 100 / (nextQuestions.length)
        setCurrentQuestion(nextQuestions[0])
        setQuestionNumber(1);
        setProgress(increment);

    } else {
      // check if question has been answered
      const answeredQ = allAnswers.find(ans => ans.label === answer.label);

      // if answered, replace answer
      if (answeredQ) {
        const idx = allAnswers.findIndex(ans => ans.label === answer.label);
        const copiedAnswers = [...allAnswers];
        copiedAnswers[idx] = answer;
        setAllAnswers(copiedAnswers)
      } else {
        setAllAnswers([...allAnswers, answer]);
      }

      // set current question and increment progress if question No is less than no of all questions
      if (questionNumber < allQuestions.length) {
        setQuestionNumber(1 + questionNumber);
        const increment = 100 / (allQuestions.length);
        setProgress(progress + increment);
        setCurrentQuestion(allQuestions[questionNumber])
      }

    }

    // if all questions has been answered, set is Complete tot true
    if ((questionNumber > 0) && (questionNumber === allQuestions.length)) {
        setBackdrop(true);
        setTimeout(() => {
          setBackdrop(false);
          setIsComplete(true)
        }, 500)
    }
  }

  const handlePrev = () => {
    if(progress !== 0) {
      const increment = 100 / (allQuestions.length);
      setProgress(progress - increment);
      setCurrentQuestion(allAnswers[questionNumber - 1])
      setQuestionNumber(questionNumber - 1);
    }
  }

  return (
    <div className={classes.survey}>
      {/* render question and progress bar if is complete is false   */}
      {!isComplete &&
      <div>
        { allQuestions.length > 0 &&
          <p className={classes.progressNo} >{questionNumber} / {allQuestions.length}</p>
        }
        <LinearProgress
          variant="determinate"
          value={progress}
          className={classes.progress}
        />
        <div className={classes.questionContainer}>
          <Question
            currentQuestion={currentQuestion}
            progress={progress}
            handleNext={handleNext}
            answeredQuestions={allAnswers}
            handlePrev={handlePrev}
            questionNumber={questionNumber}
            totalQuestion={allQuestions.length}
          />
        </div>
      </div>
      }
      {/* render survey results if isComplete is true   */}
      {isComplete &&
        <SurveyResults answers={allAnswers} />
      }
      <Backdrop open={backdrop} style={{zIndex: 9000000}} >
        <CircularProgress className={classes.backdrop} color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Survey
