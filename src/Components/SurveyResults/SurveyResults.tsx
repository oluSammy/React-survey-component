import React from 'react'
import surveyResultsStyles from './SurveyResults.styles';
import HelpIcon from '@material-ui/icons/Help';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { IAnswer } from '../../types/types';
import { motion } from 'framer-motion';
import { pageTransition, transit } from '../../utils/animate';


type props =  {
  answers: IAnswer[]
}

const SurveyResults: React.FC<props> = ({ answers }) => {
  const classes = surveyResultsStyles();
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transit}
      className={classes.surveyResults}
    >
      <h1 className={classes.title}>Survey Answers</h1>
      <div className={classes.surveyContainer}>
        {answers.map(answer => (
          <div className={classes.qAndA}>
            <div className={classes.question}>
              <HelpIcon className={classes.questionIcon} />
              <h6 className={classes.questionTxt}>{answer.label}</h6>
            </div>
            <div className={classes.answer}>
              <QuestionAnswerIcon className={classes.questionIcon} />
              <div>
                {answer.answer === true && 'true'}
                {answer.answer === false && 'false'}
                {answer.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SurveyResults
