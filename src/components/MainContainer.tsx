import { Box } from '@mui/material';
import React, { FunctionComponent, useLayoutEffect, } from 'react';
import Navbar from './Navbar';

interface IMainContainerProps {
    title?: string
    children?: React.ReactNode
}
export const MainContainer: FunctionComponent<IMainContainerProps> = ({ title, children }) => {
    useLayoutEffect(() => {
        document.title = `${title}`
    }, [title])

    return (
   <Box style={{position: 'fixed', width:"100%", justifyContent: 'center',}}>
        <Navbar /> 
        <Box style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', position: 'fixed', overflow: 'auto'}}>
            {children}
        </Box>
    </Box>
    
    )
}
