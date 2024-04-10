const GameOver=({winner})=>{
    return(
        <div id="game-over">
            <h2>GAME OVER!!!</h2>
            {winner && <p>{winner} WON!!</p>}
            {!winner && <p>It's DRAW</p>}
            <p>
                <button>REMATCH!</button>
            </p>
        </div>
    );
}
export default GameOver;