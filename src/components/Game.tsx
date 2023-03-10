import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FC, FunctionComponent, useState } from "react";
import DefaultToaster from "./DefaultToaster";

type BoardType = (string | null)[];


interface IBoardProps { }


const Game: FunctionComponent<IBoardProps> = () => {
    const StyledButton = styled(Button)({
        height: '4em',
        width: '100%',
        fontSize: '1.5rem',
        color: 'red'
    });
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
            setToasterMessage({ ...toasterMessage, severity: 'success', message: `Congratulations Player ${winner}!` });
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

    const renderButton = (index: number) => (
        <StyledButton
            variant="contained"
            onClick={() => handleClick(index)}
            disabled={winner || board[index] as any}
        >
            {board[index]}
        </StyledButton>
    );

    return (
        <>
            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: '1em', borderBottom: '1px solid black' }}>
                <Typography variant="body1">{status}</Typography>
            </Box>
            <Grid container spacing={3}>
                {[0, 1, 2].map((i) => (
                    <Grid key={i} item xs={4}>
                        {renderButton(i)}
                    </Grid>
                ))}
                {[3, 4, 5].map((i) => (
                    <Grid key={i} item xs={4}>
                        {renderButton(i)}
                    </Grid>
                ))}
                {[6, 7, 8].map((i) => (
                    <Grid key={i} item xs={4}>
                        {renderButton(i)}
                    </Grid>
                ))}
            </Grid>
            <DefaultToaster severity={toasterMessage.severity as any} message={toasterMessage.message} setOpen={setOpen} isOpen={isOpen} />
            <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                <Button variant="contained" onClick={resetBoard} color='warning'>
                    Reset
                </Button>
            </Box>

        </>
    );
};

export default Game;
