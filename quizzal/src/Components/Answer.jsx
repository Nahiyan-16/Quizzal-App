import React from "react"

export default function Answer(props){
    const[selected, setSelected] = React.useState(null)
    const[answers, setAnswers] = React.useState()

    React.useEffect(
        ()=>{
            setAnswers(getQuestions())
        },
        []
    )

    function handleClick(e){
        setSelected(e.target.firstChild.data)
        props.handleClick()
    }

    function getQuestions(){
        let ary = []
        let index = 0
        let randNum = Math.floor(Math.random() * 4)
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
            <button onClick={handleClick} className='selected'>{ary[0]}</button>
            <button onClick={handleClick} className={selected === ary[1]?"selected":""}>{ary[1]}</button>
            <button onClick={handleClick} className={selected === ary[2]?"selected":""}>{ary[2]}</button>
            <button onClick={handleClick} className={selected === ary[3]?"selected":""}>{ary[3]}</button>
        </div>)
    }

    return (
        <div>
            {answers}
        </div>
    )
}