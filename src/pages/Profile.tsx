import { Grid, Paper, Box, Typography, Tabs, Tab, ThemeProvider } from "@mui/material"
import { MainContainer } from "../components/MainContainer"
import { useProfile } from "../components/hooks/useProfile"
import { makeStyles, Container } from "@material-ui/core";


const useStyles = makeStyles({
  container: {
    paddingLeft: 0,
    marginBottom: '3.5em'
  },
});


const Profile = () => {
  const {
    tabs,
    value, setValue,theme,
    handleChange} = useProfile()
    const classes = useStyles();
    return (
        <MainContainer title={"Member Profile"} >
          <ThemeProvider theme={theme}>
              <Container className={classes.container}>
                <Paper
                  variant="outlined"
                  sx={{
                    my: { xs: 2, md: 6 },
                    p: { xs: 1, md: 3 },
                    boxShadow: "5px 10px #262626",
                  }}
                >
                 <Tabs value={value} onChange={handleChange} centered>
                    {tabs.map((tab) => (
                      <Tab
                        key={tab}
                        label={tab}
                      />
                    ))}
                  </Tabs>
                </Paper>
              </Container>
            </ThemeProvider>
      </MainContainer>
    ) 
}

export default Profile