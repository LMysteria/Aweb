import React from "react";
import { ButtonStyle } from "./Style/ButtonStyle";

const StartButton = ({callback}) =>(
    <ButtonStyle onClick={callback}>Start Game</ButtonStyle>
)

export default StartButton;