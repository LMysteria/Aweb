import React from "react";
import HoldBoard from "./HoldBoard";

const Hold = ({tetromino, hashold}) => {
  
    return (
      <div className="Hold">
        <HoldBoard tetromino={tetromino} hashold={hashold}/>
      </div>
    );
  };
  

export default React.memo(Hold);