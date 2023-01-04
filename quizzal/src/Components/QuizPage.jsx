import React from 'react'
import Question from './Question'
import Answer from './Answer'

export default function QuizPage(props){

    return (
        <div>
            <svg className="yellowBlob" width="162" height="187" viewBox="0 0 162 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M99.4095 71.3947C71.1213 40.8507 33.3179 11.7816 37.1727 -29.6933C41.4394 -75.599 75.854 -115.359 118.419 -133.133C158.797 -149.994 206.035 -140.256 241.822 -115.149C271.947 -94.0141 272.823 -53.8756 282.141 -18.271C292.17 20.0508 318.521 60.8106 296.501 93.7792C273.539 128.159 224.991 133.432 183.931 128.768C148.318 124.723 123.751 97.6768 99.4095 71.3947Z" fill="#FFFAD1"/>
            </svg>

            <div className='quizPageContainer'>
                <div className='questionContainer'>
                    <Question question={props.questions[0].question}/>
                    <Answer 
                        answer={props.questions[0]}
                        revealAnswer= {props.questions.revealAnswers}   
                    />
                </div>
                <div className='questionContainer'>
                    <Question question={props.questions[1].question}/>
                    <Answer 
                        answer={props.questions[1]}
                        revealAnswer= {props.questions.revealAnswers}   
                    />
                </div>
                <div className='questionContainer'>
                    <Question question={props.questions[2].question}/>
                    <Answer 
                        answer={props.questions[2]}
                        revealAnswer= {props.questions.revealAnswers}   
                    />
                </div>
                <div className='questionContainer'>
                    <Question question={props.questions[3].question}/>
                    <Answer 
                        answer={props.questions[3]}
                        revealAnswer= {props.questions.revealAnswers}   
                    />
                </div>
                <div className='questionContainer'>
                    <Question question={props.questions[4].question}/>
                    <Answer 
                        answer={props.questions[4]}
                        revealAnswer= {props.questions.revealAnswers}   
                    />
                </div>
                <div className='questionContainer'>
                    <Question question={props.questions[5].question}/>
                    <Answer 
                        answer={props.questions[5]}
                        revealAnswer= {props.questions.revealAnswers}   
                    />
                </div>
                <div className='questionContainer'>
                    <Question question={props.questions[6].question}/>
                    <Answer 
                        answer={props.questions[6]}
                        revealAnswer= {props.questions.revealAnswers}   
                    />
                </div>
                <div className='questionContainer'>
                    <Question question={props.questions[7].question}/>
                    <Answer 
                        answer={props.questions[7]}
                        revealAnswer= {props.questions.revealAnswers}   
                    />
                </div>
                <div className='questionContainer'>
                    <Question question={props.questions[8].question}/>
                    <Answer 
                        answer={props.questions[8]}
                        revealAnswer= {props.questions.revealAnswers}   
                    />
                </div>
                <div className='questionContainer'>
                    <Question question={props.questions[9].question}/>
                    <Answer 
                        answer={props.questions[9]}
                        revealAnswer= {props.questions.revealAnswers}   
                    />
                </div>
            </div>
            <button className='quizSubmit' onClick={props.handleSubmit}>Submit</button>            
        </div>
    )
}