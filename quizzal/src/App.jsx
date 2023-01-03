import React from 'react'
import FirstPage from './Components/FirstPage'
import QuizPage from './Components/QuizPage'

export default function App() {
  const [pageStart, setPageStart] = React.useState(true)
  const [quizQuestions, setQuizQuestions] = React.useState([])

  React.useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch('https://the-trivia-api.com/api/questions')
        const data = await res.json()
        setQuizQuestions(data)
      }
      fetchData()
    },
    []
  )

  function startQuiz(){
    setPageStart(false)
  }

  function handleClick(e){
    
  }

  return (
    <div className="App">
        {pageStart?<FirstPage startQuiz= {startQuiz}/>:""}
        {!pageStart?<QuizPage 
          questions= {quizQuestions}
          handleClick= {handleClick}
          />:""
        }
    </div>
  )
}


