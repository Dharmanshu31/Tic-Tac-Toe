import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Players from "./component/Player";
import Log from "./component/Log";
import { WINNING_COMBINATIONS } from "./component/wining-combination";
import GameOver from "./Gameover";
const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null],
]
const deriveActivePlayer = (gameTurn) => {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};
function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer=deriveActivePlayer(gameTurn);
  let gameBoard=initialGameBoard;
    for(const turn of gameTurn){
        const {squre,player}=turn;
        const {row,col}=squre;
        gameBoard[row][col]=player;
    }
    let winner;
    for(const combination of WINNING_COMBINATIONS){
      const firstSqureSymbol= gameBoard[combination[0].row][combination[0].column];
      const secondSqureSymbol=gameBoard[combination[1].row][combination[1].column];
      const thirdSqureSymbol=gameBoard[combination[2].row][combination[2].column];
      if(firstSqureSymbol&&firstSqureSymbol===secondSqureSymbol&&firstSqureSymbol===thirdSqureSymbol){
        winner=firstSqureSymbol;
      }
    }
    const hasDraw=gameTurn.length==9 && !winner;
  const handalSqure = (rowIndex, colIndex) => {
    setGameTurn((prevTurn) => {
      const currentPlayer=deriveActivePlayer(prevTurn);
      const updateTurn = [
        { squre: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updateTurn;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players name="Player1" symbol="X" isActive={activePlayer === "X"} />
          <Players name="Player2" symbol="0" isActive={activePlayer === "O"} />
        </ol>
        {(winner||hasDraw)&& <GameOver winner={winner}/>}
        <GameBoard onSelectSqure={handalSqure} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
