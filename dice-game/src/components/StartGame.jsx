import React from 'react'
import './StartGame.css'

const StartGame = (props) => {
    return (
        <>
            <div className="container">
                <div className="image">
                    <img src="src\images\dices.png" alt="" />
                </div>
                <div className="content">
                    <h1>DICE GAME</h1>
                    <button onClick={props.toggle}>Play Now</button>
                </div>
                
            </div>
        </>
    )
}

export default StartGame