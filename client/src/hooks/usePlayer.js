import { useState, useCallback } from "react";

import { randomTetromino, TETROMINOES } from "../function/Tetrominoes";

const buildPlayer = (previous) => {
  let tetrominoes=[];
  let hold;

  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    tetrominoes.push(randomTetromino());
    hold = previous.hold;
  } else {
    tetrominoes = Array(5)
      .fill(0)
      .map((_) => randomTetromino());
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
