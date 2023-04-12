import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FC, FunctionComponent, useState } from "react";
import DefaultToaster from "./DefaultToaster";
import { useGameApi } from "./hooks/useGameApi";




interface IBoardProps { }


const Game: FunctionComponent<IBoardProps> = () => {
    const {
        status,
        winner,
        handleClick,
        resetBoard,
        toasterMessage,
        isOpen,
        setOpen,
        board,
        isPlayerTurn
    } = useGameApi()
    const StyledButton = styled(Button)({
        height: '4em',
        width: '100%',
        fontSize: '1.5rem',
        color: 'red'
    });
    const renderButton = (index: number) => (
        <StyledButton
            variant="contained"
            onClick={() => handleClick(index)}
            disabled={isPlayerTurn || winner || board[index] as any}
        >
            {board[index]}
        </StyledButton>
    );
    return (
        <>
            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: '1em', borderBottom: '1px solid black' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                    <Typography variant="body1">{status}</Typography>
                    <Button variant="text" onClick={resetBoard} color='warning' >
                        Reset
                    </Button>
                </Box>
            </Box>
            <Box>
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
            </Box>
            <DefaultToaster severity={toasterMessage.severity as any} message={toasterMessage.message} setOpen={setOpen} isOpen={isOpen} />
        </>
    );
};

export default Game;
