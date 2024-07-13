import {Action, actionForKey, actionIsDrop} from "../function/Input"
import { playerController } from "../function/playerController";

import { useInterval } from "../hooks/useInterval";
import {useDropTime} from "../hooks/useDropTime"

var hold = false;

const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
}) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    });

    useInterval(() =>{
        handleInput({ action: Action.SoftDrop});
    }, dropTime);

    const onKeyUp = ({code}) => {
        const action = actionForKey(code);
        if (actionIsDrop(action)) resumeDropTime();
        hold=false;
    }

    const onKeyDown = ({code}) => {
        const action = actionForKey(code);
        if (action === Action.Left || action === Action.Right || action===Action.SoftDrop){ 
            if (action===Action.SoftDrop) pauseDropTime();
                handleInput({action});
            return;
        }
        if (hold) return;
        hold = true;
        if (action === Action.Pause){
            if (dropTime){
                pauseDropTime();
            } else {
                resumeDropTime();
            }
        }
        if (action === Action.Quit){
            setGameOver(true);
            return;
        } 
        if (actionIsDrop(action)) pauseDropTime();
        handleInput({action});
    }

    const handleInput = ({action}) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        })
    }

    return(
        <input
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
            spellCheck = "false"
        />
    )
}

export default GameController;