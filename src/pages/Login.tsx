import { useState } from "react";
import { Avatar, Box, Button, Checkbox, CircularProgress, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import DefaultToaster from "../components/DefaultToaster";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Copyright, LockClockOutlined } from "@mui/icons-material";
import Game from "../components/Game";
import { MainContainer } from "../components/MainContainer";

const Login = () => {
 
  const [toasterMessage, setToasterMessage] = useState({ severity: '', message: '' });
  const [showToaster, setShowToaster] = useState(false);
  const theme = createTheme();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const username = data.get("email");
      const password = data.get("password");
      if (!username || !password) {
        throw new Error("Please enter your username and password to continue.");
      } else {
        setToasterMessage({ ...toasterMessage, message: 'Successful', severity: 'success' });
        setShowToaster(true);
      }

    } catch (error) {
      if (typeof error === "string") {
        setToasterMessage({ ...toasterMessage, message: error, severity: 'error' });
      } else if (error instanceof Error) {
        setToasterMessage({ ...toasterMessage, message: error.message, severity: 'error' });
      } else {
        setToasterMessage({ ...toasterMessage, message: 'An error occurred.', severity: 'error' });
      }
      setShowToaster(true);
    }
  };


  return (
    <MainContainer title={"Login"} >
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}

          />

          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
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
                  control={<Checkbox value="remember" color="primary" />}
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
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              
              </Box>
                 <Box style={{padding: 0}}>
              <Game />
            </Box>
            </Box>
         
          </Grid>
        </Grid>
      </ThemeProvider>
    
      <DefaultToaster setOpen={setShowToaster} isOpen={showToaster} severity={toasterMessage.severity as any} message={toasterMessage.message} />
      </MainContainer>
  );
};

export default Login;
