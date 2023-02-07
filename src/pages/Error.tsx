import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { MainContainer } from "../components/MainContainer"

const Error = () => {
    return (
    <MainContainer title={'Not Found'} >
        <Box flexDirection='column'>
            <Box flexDirection='column' display='flex' justifyContent='center'>
                <Typography gutterBottom>This page was not found</Typography>
                <Button color='primary' variant='contained' component={Link} to='/'> Return to Home Page</Button>
            </Box>
        </Box>
    </MainContainer>
    )
}

export default Error