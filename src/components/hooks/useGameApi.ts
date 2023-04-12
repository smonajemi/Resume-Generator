import { useState } from "react";

export const useGameApi = () => {
    type BoardType = (string | null)[];
    const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
    const [isOpen, setOpen] = useState<boolean>(false);
    const [toasterMessage, setToasterMessage] = useState({ severity: 'success', message: '' });
    const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(false);

    const isBoardFull = (board: BoardType): boolean => {
      return board.every(square => square !== null);
    }
    
    const handleClick = (index: number) => {
        const newBoard = [...board];
        if (newBoard[index] || calculateWinner(newBoard)) {
          return;
        }
        newBoard[index] = 'X';
        setBoard(newBoard);
        setIsPlayerTurn(true);
        // Computer's turn
        setTimeout(() => {
          const emptySquares = newBoard.reduce((acc: number[], curr, index) => {
              if (curr === null) {
                acc.push(index);
              }
              return acc;
            }, []);
          const randomIndex = Math.floor(Math.random() * emptySquares.length);
          newBoard[emptySquares[randomIndex]] = 'O';
          setBoard(newBoard);
          setIsPlayerTurn(false);
          const winner = calculateWinner(newBoard);
          if (winner) {
            setToasterMessage({ ...toasterMessage, severity: 'success', message: `Congratulations Player ${winner}.` });
            setOpen(true)
            return
          } else if (isBoardFull(newBoard)) {
            setToasterMessage({ ...toasterMessage, severity: 'warning', message: `Draw!` });
            setOpen(true)
          }
        }, 2000);
      };
      
    
    const calculateWinner = (board: BoardType): string | null => {
      const winningLines = [[0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      ];
      for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return null;
    };
    
    const resetBoard = () => {
      setBoard(Array(9).fill(null));
    };
    
    const winner = calculateWinner(board);
    let status = winner ? `Winner: ${winner}` : (isBoardFull(board) ? "Draw" : `Next player: X`);
    


    return {
        status,
        winner,
        board,
        handleClick,
        calculateWinner,
        resetBoard,
        toasterMessage, 
        setToasterMessage,
        isOpen, 
        setOpen,
        isPlayerTurn, setIsPlayerTurn
      } as const;
};




