import React from 'react'

export default function Joke({question, punchline}){
    return (
        <div>
            <h3>{question}</h3>
            <h5>{punchline}</h5>
            <hr/>
        </div>
    )
}