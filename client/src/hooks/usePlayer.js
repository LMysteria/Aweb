import { useState, useCallback } from "react";

import { TETROMINOES, bag7 } from "../function/Tetrominoes";

const buildPlayer = (previous) => {
  let tetrominoes=[];
  let hold;

  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    console.log(tetrominoes.length)
    if (tetrominoes.length <= 5) {
      tetrominoes = tetrominoes.concat(bag7())
    }
    hold = previous.hold;
  } else {
    tetrominoes = bag7()
    hold = TETROMINOES["NONE"]
  }
  const nextTetromino = tetrominoes[0];
  tetrominoes=tetrominoes.slice(1);

  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 3 },
    tetrominoes,
    tetromino: nextTetromino,
    hold,
    hashold: false,
  };
};

export const usePlayer = () => {
  const [player, setPlayer] = useState(buildPlayer());

  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev));
  }, []);

  return [player, setPlayer, resetPlayer];
};
