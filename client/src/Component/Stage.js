import React from "react";
import Tile from "./Tile";
import { StageStyle } from "./Style/StageStyle";

const Stage = ({stage}) => (
    <StageStyle width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell,x)=><Tile key={x} type={cell[0]} />))}
    </StageStyle>
)

export default Stage;