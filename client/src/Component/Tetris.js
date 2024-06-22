import React from "react";

import {createStage} from '../GameHelper/GameHelper';
import { StyleTetrisWrapper, StyleTetris } from "./Style/TetrisStyle";

//components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./Button";

const Tetris = ()=>{

    return (
        <StyleTetrisWrapper>
            <StyleTetris>
                <Stage stage={createStage()}/>
                <aside>
                    <Display text="Score" />
                    <Display text="Row" />
                    <Display text="Level" />
                    <StartButton/>
                </aside>
            </StyleTetris>
        </StyleTetrisWrapper>
    );
};

export default Tetris;