import React from "react";

const GameInfo = ({chosenGame}) => {
    
    return (
        <div>
            <h2>Game Info</h2>
            <p>{chosenGame.title}</p>
        </div>
    )
}

export default GameInfo