import { useEffect } from "react";
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, TextField, Typography, Link, Container, Paper, Tab, Tabs } from "@mui/material";
import DefaultToaster from "../components/DefaultToaster";
import { ThemeProvider } from "@mui/material/styles";
import { MainContainer } from "../components/MainContainer";
import { useLogin } from "../components/hooks/useLogin";
import { LockClockOutlined } from "@mui/icons-material";
import Game from "../components/Game";

const Signup = () => {
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
        handleSignup,
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
            <MainContainer title={"Signup"} >
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
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
                                    Sign up
                                </Typography>
                                <Box component="form" noValidate  onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="firstName"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                                // onChange={e => handleSignup(e, (e?.target as HTMLTextAreaElement)?.name)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="family-name"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="re-password"
                                                label="Re-Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        // onClick={incompleteTask}
                                    >
                                        Sign Up
                                    </Button>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link href="/login" variant="body2">
                                                Already have an account? Sign in
                                            </Link>
                                        </Grid>
                                    </Grid>
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

export default Signup;
