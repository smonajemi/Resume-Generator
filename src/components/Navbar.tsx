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
    CircularProgress,
} from "@mui/material";
import React from "react";
import { useNavBar } from "./hooks/useNavbar";
import { useAuth } from "./hooks/useAuth";

const Navbar = () => {
    const { handleProfileOption, settings, handleClose, handleMenu, anchorEl, setAnchorEl, isLoggingOut } = useNavBar();
    const { isAuthenticated, isGuestAuth, isNotProfile, isMemberProfile } = useAuth()
    return (
        <Box sx={{ marginRight: '1em' }}>
            <AppBar position="sticky">
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
                    { isLoggingOut && (
                         <Box
                         style={{
                           position: "absolute",
                           top: 0,
                           left: 0,
                           right: 0,
                           bottom: 0,
                           background: "rgba(0, 0, 0, 0.5)",
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                         }}
                       >
                         <CircularProgress color="secondary" />
                       </Box>
                    )}
             
             {isAuthenticated && !isNotProfile && (
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
                                {isGuestAuth && settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={() => handleProfileOption(setting)}
                                        disabled={setting?.includes('Profile')}
                                    >
                                        <Typography textAlign="center" >{setting}</Typography>
                                    </MenuItem>
                                ))}

                                {!isGuestAuth && settings.slice(0, -1).map((setting) => (
                                    <MenuItem
                                        key={setting?.includes('Profile') && isMemberProfile ? 'Home': setting}
                                        onClick={() => handleProfileOption(setting?.includes('Profile') && isMemberProfile ? 'Home': setting)}
                                    >
                                    <Typography textAlign="center" >{!setting?.includes('Signup') && setting?.includes('Profile') && isMemberProfile ? 'Home': setting}</Typography>
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
