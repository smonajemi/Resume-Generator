import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useState } from "react";

export const useGameApi = () => {
    type BoardType = (string | null)[];

    const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [isOpen, setOpen] = useState<boolean>(false);
    const [toasterMessage, setToasterMessage] = useState({ severity: 'success', message: '' });
    
    const handleClick = (index: number) => {
        const newBoard = [...board];
        if (newBoard[index] || calculateWinner(newBoard)) {
            return;
        }
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    
        const winner = calculateWinner(newBoard);
        if (winner) {
            setToasterMessage({ ...toasterMessage, severity: 'success', message: `Congratulations Player ${winner}.` });
            setOpen(true)
        } else if (newBoard.every(square => square !== null)) {
            status = ''
            setToasterMessage({ ...toasterMessage, severity: 'warning', message: `Draw!` });
            setOpen(true)
        }
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
        setXIsNext(true);
    };
    
    
    const winner = calculateWinner(board);
    let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
    


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
        setOpen
      } as const;
};




