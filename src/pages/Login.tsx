import { useEffect } from "react";
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Paper, Tab, Tabs, TextField, Typography, Link } from "@mui/material";
import DefaultToaster from "../components/DefaultToaster";
import { ThemeProvider } from "@mui/material/styles";
import { LockClockOutlined } from "@mui/icons-material";
import { MainContainer } from "../components/MainContainer";
import Game from "../components/Game";
import { useLogin } from "../components/hooks/useLogin";

const Login = () => {
  const { value,
    setValue,
    handleChange,
    tabs,
    toasterMessage,
    setToasterMessage,
    showToaster,
    setShowToaster,
    currentImageIndex,
    setCurrentImageIndex,
    theme,
    navigate,
    setItem,
    handleGuestLogin,
    handleSubmit,
    incompleteTask,
    images } = useLogin()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000 * 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <MainContainer title={"Login"} >
        <ThemeProvider theme={theme}>
          <Grid container component="main">
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 2,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockClockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: '2em' }}>
                  <Tabs value={value} onChange={handleChange} centered>
                    {tabs.map((tab) => (
                      <Tab
                        key={tab}
                        label={tab}
                      />
                    ))}
                  </Tabs>
                </Box>
                <Box sx={{ p: 3 }}>
                  {value === 1 && <>
                    <Button type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }} onClick={handleGuestLogin}>Continue</Button>

                    <Box style={{ padding: 0, marginTop: '2em' }}>
                      <Game />
                    </Box>
                  </>}
                  {value === 0 && <>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" onClick={incompleteTask} />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Button variant="text" color="primary" onClick={incompleteTask}>
                            Forgot Password?
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="text" color="primary" onClick={() => navigate('/signup')}>
                            Sign Up
                          </Button>
                        </Grid>
                      </Grid>

                    </Box>
                  </>}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </MainContainer>

      <DefaultToaster setOpen={setShowToaster} isOpen={showToaster} severity={toasterMessage.severity as any} message={toasterMessage.message} />
    </>
  );
};

export default Login;
