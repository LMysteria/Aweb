import React from "react";

import { buildBoard } from "../function/Board";
import {transferToBoard} from "../function/Tetrominoes";

import BoardCell from "./BoardCell";

const HoldBoard = ({tetromino, hashold}) => {
    const {shape} = tetromino;
    const board = buildBoard({rows: 4, columns: 4});
    const className = hashold ? `tetromino hashold` : tetromino.className;
    board.rows= transferToBoard({
        className,
        isOccupied: false,
        position: {row:0,column: 0},
        rows: board.rows,
        shape,
    });

    return (
        <div className="Preview">
            <div className="Preview-board">
                {board.rows.map((row,y)=>
                row.map((cell,x)=>(
                    <BoardCell key={x*board.size.columns+x} cell={cell}/>
                ))
                )}
            </div>
        </div>
    )
}

export default React.memo(HoldBoard);