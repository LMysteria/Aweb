import React from "react";

import Preview from "./Preview";

const Previews = ({tetrominoes}) => {
    const previewTetrominoes = tetrominoes.slice(0,4)
  
    return (
      <>
        {previewTetrominoes.map((tetromino, index) => (
          <Preview tetromino={tetromino} key={index}/>
        ))}
      </>
    );
  };
  

export default React.memo(Previews);