import React from "react";
import { TETROMINOS } from "../GameHelper/tetrominos";
import {TileStyle} from "./Style/TileStyle"

const Tile = ({type}) => (
    <TileStyle type={type} color={TETROMINOS[type].color}></TileStyle>
)

export default Tile;