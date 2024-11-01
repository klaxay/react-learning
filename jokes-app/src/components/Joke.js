import React from 'react'

export default function Joke({question, punchline}){
    const [isShown, setIsShown] = React.useState(false)
    const [showVariable, setShowVariable]=React.useState('Show')
    function toggleIsShown(){
        setIsShown(prevShown => !prevShown)
        setShowVariable(prevVariable=>{
            if(prevVariable=='Show'){return 'Hide'}
            else{return 'Show'}
        })
    }
    return (
        <div>
            <h3>{question}</h3>
            {isShown && <h5>{punchline}</h5>}
            <button onClick={toggleIsShown}>{showVariable} Punchline</button>
            <hr/>
        </div>
    )
}