import { AccountCircle } from "@mui/icons-material";
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavBar } from "./hooks/useNavbar";

const Navbar = () => {
    const { handleProfileOption, navigate, settings, isAuthenticated } =
        useNavBar();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => { };

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <AppBar position="static">
                <Toolbar>
                    <Box
                        component="a"
                        href="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <Avatar alt="ResumeGenie" src="../image/logo.png" />
                        <Typography variant="h6" noWrap component="a">
                            ResumeGenie
                        </Typography>
                    </Box>

                    {auth && (
                        <Box sx={{ ml: "auto" }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={() => handleProfileOption(setting)}
                                    >
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;