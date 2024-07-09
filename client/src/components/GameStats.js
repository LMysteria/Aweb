import React from "react";

const gameStats = ({gameStats}) =>{
    const {level, points, linesCompleted, linesPerLevel} = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;

    return (
        <>
            <p>level</p>
            <p className="value">{level}</p>
            <p>Lines to level</p>
            <p className="value">{linesToLevel}</p>
            <p>Points</p>
            <p className="value">{points}</p>
        </>
    );
};

export default React.memo(gameStats)