import {useState, useEffect} from "react";
import {buildBoard, nextBoard} from "../function/Board"

export const useBoard = ({
    rows, 
    columns, 
    player, 
    resetPlayer, 
    addLinesCleared}) => {

    const [Board, setBoard] = useState(buildBoard({rows, columns}));

    useEffect(()=>{
        setBoard((previousBoard)=>
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                addLinesCleared
            })
        );
    }, [player, resetPlayer,addLinesCleared]);

    return [Board];
}