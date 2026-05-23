import { useState } from "react";
import "./App.css"; // Ensure this matches your CSS file name

function calculateWinner(squares) {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (const [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return { winner: squares[a], line: [a,b,c] };
  }
  return null;
}

const Square = ({ value, onClick, isWinning, isBlocked }) => {
  const cls = ["square",
    value ? "filled" : "",
    isBlocked && !value ? "blocked" : "",
    value === "X" ? "x-mark" : value === "O" ? "o-mark" : "",
    isWinning ? "winning" : ""
  ].filter(Boolean).join(" ");
  return (
    <button className={cls} onClick={onClick} aria-label={value || "empty"}>
      {value && <span className="mark-enter">{value}</span>}
    </button>
  );
};

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const result   = calculateWinner(board);
  const winner   = result?.winner;
  const winLine  = result?.line || [];
  const isDraw   = !winner && board.every(s => s !== null);
  const gameOver = winner || isDraw;

  const handleClick = (i) => {
    if (board[i] || gameOver) return;
    const next = [...board];
    const currentPlayer = xIsNext ? "X" : "O";
    next[i] = currentPlayer;

    setBoard(next);
    setXIsNext(!xIsNext);

    const result = calculateWinner(next);
    if (result?.winner) {
      setScores(prev => ({ ...prev, [result.winner]: prev[result.winner] + 1 }));
    }
  };

  const reset = () => { setBoard(Array(9).fill(null)); setXIsNext(true); };

  const pillClass = winner ? "status-pill winner" : isDraw ? "status-pill draw" : xIsNext ? "status-pill turn-x" : "status-pill turn-o";
  const pillDot   = winner ? "win" : isDraw ? "draw" : xIsNext ? "x" : "o";
  const pillText  = winner ? `${winner} wins the round` : isDraw ? "It's a draw" : `${xIsNext ? "X" : "O"}'s turn`;

  return (
    <div className="shell">

      {/* CREDIT BAR */}
      <div className="credit-bar">
        Made by&nbsp;
        <a href="https://www.himanshubalani.com" target="_blank" rel="noopener noreferrer">
          himanshubalani.com
        </a>
        <span className="sep">|</span>
        Read&nbsp;
        <a href="https://blog.himanshubalani.com/" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </div>

      {/* MAIN */}
      <div className="main">
        <div className="layout">

          {/* LEFT — info */}
          <div className="left-panel">
            <div>
              <h1 className="title">Tic <em>Tac</em> Toe</h1>
            </div>

            <div className={pillClass}>
              <span className={`dot ${pillDot}`} />
              {pillText}
            </div>

            <div className="scores">
              <div className={`score-card ${!gameOver && xIsNext ? "active-x" : ""}`}>
                <div className="score-label">Player X</div>
                <div className="score-num">{scores.X}</div>
              </div>
              <div className="vs">VS</div>
              <div className={`score-card ${!gameOver && !xIsNext ? "active-o" : ""}`}>
                <div className="score-label">Player O</div>
                <div className="score-num">{scores.O}</div>
              </div>
            </div>

            <button className="reset-btn" onClick={reset}>
              {gameOver ? "Play next round" : "Restart game"}
            </button>
          </div>

          {/* RIGHT — board */}
          <div className="right-panel">
            <div className="board-wrap">
              <div className="board">
                {board.map((val, i) => (
                  <Square
                    key={i}
                    value={val}
                    onClick={() => handleClick(i)}
                    isWinning={winLine.includes(i)}
                    isBlocked={!!gameOver}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}