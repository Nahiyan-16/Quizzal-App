import React from "react"

export default function Answer(props){
    const[selected, setSelected] = React.useState(null)
    const[answers, setAnswers] = React.useState(null)

    React.useEffect(
        ()=>{
            setAnswers(getQuestions())
        },
        [selected, props.revealAnswer]
    )

    function handleClick(ans){
        setSelected(ans)
        if(ans === props.answer.correctAnswer){
            props.answer.isCorrect = true
        }
        else{
            props.answer.isCorrect = false
        }
    }

    function getQuestions(){
        let ary = []
        for(let i = 0; i < 4; i++){
            if(i === props.answer.correctAnsPosition){
                ary.push(props.answer.correctAnswer)
            }
            else if(i === props.answer.otherPos1){
                ary.push(props.answer.incorrectAnswers[0])
            }
            else if(i === props.answer.otherPos2){
                ary.push(props.answer.incorrectAnswers[1])
            }
            else if(i === props.answer.otherPos3){
                ary.push(props.answer.incorrectAnswers[2])
            }
        }
        if(!props.revealAnswer){
            return (
            <div className='answerList'>
                <button onClick={() => handleClick(ary[0])} style={ary[0] === selected?{background:'#b4bdff'}:{}}>{ary[0]}</button>
                <button onClick={() => handleClick(ary[1])} style={ary[1] === selected?{background:'#b4bdff'}:{}}>{ary[1]}</button>
                <button onClick={() => handleClick(ary[2])} style={ary[2] === selected?{background:'#b4bdff'}:{}}>{ary[2]}</button>
                <button onClick={() => handleClick(ary[3])} style={ary[3] === selected?{background:'#b4bdff'}:{}}>{ary[3]}</button>
            </div>)
        }
        else{
            return (
                <div className='answerList'>
                    <button style={ary[0] === selected|| ary[0] === props.answer.correctAnswer?
                        ary[0] === props.answer.correctAnswer?
                        {background: '#8dfc9a'}:
                        {background: '#ff5b5b'}:
                        {}
                    }>{ary[0]}</button>
                    <button style={ary[1] === selected|| ary[1] === props.answer.correctAnswer?
                        ary[1] === props.answer.correctAnswer?
                        {background: '#8dfc9a'}:
                        {background: '#ff5b5b'}:
                        {}
                    }>{ary[1]}</button>
                    <button style={ary[2] === selected|| ary[2] === props.answer.correctAnswer?
                        ary[2] === props.answer.correctAnswer?
                        {background: '#8dfc9a'}:
                        {background: '#ff5b5b'}:
                        {}
                    }>{ary[2]}</button>
                    <button style={ary[3] === selected|| ary[3] === props.answer.correctAnswer?
                        ary[3] === props.answer.correctAnswer?
                        {background: '#8dfc9a'}:
                        {background: '#ff5b5b'}:
                        {}
                    }>{ary[3]}</button>
                </div>)
        }
    }

    return (
        <div>
            {answers}
        </div>
    )
}