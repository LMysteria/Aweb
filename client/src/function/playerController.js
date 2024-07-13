import { hasCollision, isWithinBoard } from "./Board"
import { rotate } from "./Tetrominoes"
import { Action } from "./Input";
import { TETROMINOES } from "./Tetrominoes";

const attemptRotation = ({board, player, setPlayer, clockwise}) => {
    const shape = rotate({
        piece: player.tetromino.shape,
        direction: clockwise
    });

    const position=player.position;
    const isvalidRotation = 
        isWithinBoard({board, position, shape}) &&
        !hasCollision({board, position, shape});

    if (isvalidRotation) {
        setPlayer({
            ...player,
            tetromino:{
                ...player.tetromino,
                shape
            }
        });
    } else {
        return false
    }
}

export const movePlayer = ({delta, position, shape, board}) => {
    const desiredNextPosition = {
        row: position.row + delta.row,
        column: position.column + delta.column
    };

    const collided = hasCollision({
        board,
        position: desiredNextPosition,
        shape,
    });

    const isOnBoard = isWithinBoard({
        board,
        position: desiredNextPosition,
        shape
    });

    const preventMove = !isOnBoard || (isOnBoard && collided);
    const nextPosition = preventMove ? position : desiredNextPosition;

    const isMovingDown = delta.row>0;
    const isHit = isMovingDown && (collided || !isOnBoard);
    return {collided: isHit, nextPosition};
};

const attemptMovement = ({
    board,
    player,
    setPlayer,
    action,
    setGameOver,
}) => {
    const delta = {row: 0, column: 0};
    let isHardDrop = false;

    if (action === Action.HardDrop) {
        isHardDrop = true;
    } else if (action === Action.SoftDrop) {
        delta.row += 1;
    } else if (action === Action.Left) {
        delta.column -= 1;
    } else if (action === Action.Right) {
        delta.column += 1;
    }

    const {collided, nextPosition} = movePlayer({
        delta,
        position: player.position,
        shape: player.tetromino.shape,
        board
    });

    const isGameOver =  collided && player.position.row === 0;
    if (isGameOver) {
        setGameOver(isGameOver);
    }

    setPlayer({
        ...player,
        collided,
        isHardDrop,
        position: nextPosition
    })
}

const attempHold=({player, setPlayer})=>{
    let tetrominoes = player.tetrominoes;
    if(player.hashold) return;
    let replace = player.hold;
    let firsthold = false;
    if(replace === TETROMINOES["NONE"]){
        replace = player.tetrominoes[0];
        tetrominoes = tetrominoes.slice(1)
    }
    setPlayer({
        ...player,
        hold: player.tetromino,
        position: { row: 0, column: 3 },
        firsthold,
        tetromino: replace,
        hashold: true,
        tetrominoes: tetrominoes
    },[player, setPlayer])
}

export const playerController = ({
    action,
    board,
    player,
    setPlayer,
    setGameOver
}) => {
    if (!action) return;
    if (action === Action.Rotate) {
        attemptRotation({board, player, setPlayer, clockwise: 1});
    } else if (action === Action.CounterRotate){
        attemptRotation({board, player, setPlayer, clockwise: -1});
    } else {
        attemptMovement({board, player, setPlayer, action, setGameOver});
    }
    if (action === Action.Hold){
        attempHold({player, setPlayer});
    }
}