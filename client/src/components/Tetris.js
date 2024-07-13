import Board from  "./Board";
import GameStats from "./GameStats"
import Previews from "./Previews";
import GameController from "./GameController";
import Hold from "./Hold";

import {useBoard} from "../hooks/useBoard";
import {useGameStats} from "../hooks/useGameStats";
import {usePlayer} from "../hooks/usePlayer";

const Tetris = ({rows, columns, setGameOver}) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({
            rows, 
            columns,
            player,
            resetPlayer,
            addLinesCleared
        });

    
    return (
        <div className="Tetris">
            <Board board={board} />
            <Hold tetromino={player.hold} hashold={player.hashold}/>
            <aside>
                <Previews tetrominoes = {player.tetrominoes} />
                <GameStats gameStats={gameStats} />
            </aside>
            <GameController
                    board={board}
                    gameStats={gameStats}
                    player={player}
                    setGameOver={setGameOver}
                    setPlayer={setPlayer}
            />
        </div>
    )
}

export default Tetris;