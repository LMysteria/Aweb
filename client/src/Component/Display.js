import React from "react";
import { DisplayStyle } from "./Style/DisplayStyle";

const Display = ({gameOver,text}) => (
    <DisplayStyle gameOver={gameOver}>{text}</DisplayStyle>
)

export default Display;