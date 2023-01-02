import React from 'react'
import FirstPage from './Components/FirstPage'
import QuizPage from './Components/QuizPage'

export default function App() {
  const [pageStart, setPageStart] = React.useState(true)
  const [quizQuestions, setQuizQuestions] = React.useState([])

  React.useEffect(
    ()=>{
      fetch('https://the-trivia-api.com/api/questions')
      .then(res=>res.json())
      .then(data => {
        let ary = []
        for (let i = 0; i < 5; i++){
          ary.push(data[i])
        }
        if(quizQuestions.length <= 5){
          setQuizQuestions(ary)
        }
      })
    },
    []
  )

  function startQuiz(){
    setPageStart(false)
  }

  return (
    <div className="App">
        {pageStart?<FirstPage startQuiz= {startQuiz}/>:""}
        {!pageStart?<QuizPage questions= {quizQuestions}/>:""}
    </div>
  )
}


