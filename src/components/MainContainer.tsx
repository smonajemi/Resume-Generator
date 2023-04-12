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
        <Box style={{ width: '100%', height: '100%', position: 'fixed' }}>
        <Box style={{ width: '100%', height: '60px', position: 'fixed', top: 0, left: 0, right: 0 }}>
          <Navbar />
        </Box>
        <Box style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
          {children}
        </Box>
      </Box>
    
    )
}
