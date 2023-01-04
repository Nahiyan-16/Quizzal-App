import React from 'react'
import FirstPage from './Components/FirstPage'
import QuizPage from './Components/QuizPage'

export default function App() {
  const [pageStart, setPageStart] = React.useState(true)
  const [quizQuestions, setQuizQuestions] = React.useState([])

  function shuffle(array) {
    let currentIndex = array.length
    let randomIndex

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
  
    return array
  }

  function setData(data){
    return data.map(d => {
      let posAry = [0, 1, 2, 3]
      posAry = shuffle(posAry)
      return {
        ...d, 
        isCorrect: false,
        correctAnsPosition: posAry[0],
        otherPos1: posAry[1],
        otherPos2: posAry[2],
        otherPos3: posAry[3],
      }
    })
  }

  React.useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch('https://the-trivia-api.com/api/questions')
        const data = await res.json()
        setQuizQuestions(() => setData(data))
        setQuizQuestions(prevQuiz => {
          return {
            ...prevQuiz,
            revealAnswers: false
          }
        })
      }
      fetchData()
    },
    []
  )

  function startQuiz(){
    setPageStart(false)
  }

  function handleSubmit(e){
    setQuizQuestions(prevQuiz => {
      return {
        ...prevQuiz,
        revealAnswers: true
      }
    })
  }

  return (
    <div className="App">
        {pageStart?<FirstPage startQuiz= {startQuiz}/>:""}
        {!pageStart?<QuizPage 
          questions= {quizQuestions}
          handleSubmit = {handleSubmit}
          />:""
        }
    </div>
  )
}


