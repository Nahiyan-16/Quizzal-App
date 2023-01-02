import React from 'react'
import Question from './Question'
import Answer from './Answer'

export default function QuizPage(props){
    return (
        <div>
            <Question question={props.questions[0].question}/>
            <Answer answer={props.questions[0]}/>
            <Question question={props.questions[1].question}/>
            <Answer answer={props.questions[1]}/>
            <Question question={props.questions[2].question}/>
            <Answer answer={props.questions[2]}/>
            <Question question={props.questions[3].question}/>
            <Answer answer={props.questions[3]}/>
            <Question question={props.questions[4].question}/>
            <Answer answer={props.questions[4]}/>
        </div>
    )
}