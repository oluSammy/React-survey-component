import React from 'react'
import NavBar from '../../Components/NavBar/NavBar.component'
import Survey from '../../Components/Survey/Survey';
import { questions } from '../../data/questions';




const Homepage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Survey questions={questions} />
    </div>
  )
}

export default Homepage
