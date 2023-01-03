import React from "react"

export default function Answer(props){
    function getQuestions(){
        let ary = []
        let index = 0
        let randNum = Math.floor(Math.random() * 4) + 1
        for(let i = 0; i < 4; i++){
            if(i === randNum){
                ary.push(props.answer.correctAnswer)
            }
            else{
                ary.push(props.answer.incorrectAnswers[index])
                index++
            }
        }

        return (
        <div className='answerList'>
            <p>{ary[0]}</p>
            <p>{ary[1]}</p>
            <p>{ary[2]}</p>
            <p>{ary[3]}</p>
        </div>)
    }

    return (
        <div>
            {getQuestions()}
        </div>
    )
}