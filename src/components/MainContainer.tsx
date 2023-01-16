import { Box } from '@mui/material';
import React, { FunctionComponent, useLayoutEffect, } from 'react';
import Navbar from './utils/Navbar'


interface IMainContainerProps {
    title?: string
    children?: React.ReactNode
}
export const MainContainer: FunctionComponent<IMainContainerProps> = ({ title, children}) => {
    useLayoutEffect(() => {
        document.title = `${title}`
    }, [title])

    const unAuthTitles = ['Not Found'];
    return (
        <>
            {unAuthTitles?.includes(title!!) ? (
                <>
                    {children}
                </>
            ) : (
                <>
                    <Navbar />
                    <Box style={{ width: '100%', margin: '3em 0 0 0em', display: 'flex', justifyContent: 'center' }}>
                        {children}
                    </Box>

                </>
            )}

        </>


    )
}
