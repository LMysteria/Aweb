import { shuffled } from "./util";

const className = "tetromino";
const keys = "IJLSZTO"

export const TETROMINOES = {
    I: {
        shape:[
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]
        ],
        className: `${className} ${className}__i`
    },
    J: {
        shape:[
            [1,0,0],
            [1,1,1],
            [0,0,0],
        ],
        className: `${className} ${className}__j`
    },
    L: {
        shape:[
            [0,0,1],
            [1,1,1],
            [0,0,0],
        ],
        className: `${className} ${className}__l`
    },
    O: {
        shape:[
            [1,1],
            [1,1],

        ],
        className: `${className} ${className}__o`
    },
    Z: {
        shape:[
            [1,1,0],
            [0,1,1],
            [0,0,0],
        ],
        className: `${className} ${className}__z`
    },
    S: {
        shape:[
            [0,1,1],
            [1,1,0],
            [0,0,0],

        ],
        className: `${className} ${className}__s`
    },
    T: {
        shape:[
            [1,1,1],
            [0,1,0],
            [0,0,0],
        ],
        className: `${className} ${className}__t`
    },
    NONE:{
        shape:[[0]],
    }
};

export const randomTetromino = () => {
    const index = Math.floor(Math.random() * keys.length);
    const key = keys[index];
    return TETROMINOES[key];
};

export const rotate = ({piece, direction}) => {
    const newPiece = piece.map((_,index) => piece.map((column)=>column[index]));

    if (direction > 0) return newPiece.map((row)=> row.reverse());

    return newPiece.reverse()
}

export const bag7 = () => {
    const shuffledbag = shuffled(keys);
    const bag = Array(0);
    for (let i=0; i<shuffledbag.length;i++){
        bag.push(TETROMINOES[shuffledbag[i]]);
    }
    return bag;
}

export const transferToBoard = ({
    className,
    isOccupied,
    position,
    rows,
    shape
}) => {
    shape.forEach((row,y)=> {
        row.forEach((cell,x) => {
            if(cell){
                const occupied = isOccupied;
                const _y = y+position.row;
                const _x = x+position.column;
                rows[_y][_x] = {occupied, className};
            }
        });
    });

    return rows;
}

