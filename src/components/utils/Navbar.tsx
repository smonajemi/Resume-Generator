import { Box, AppBar, Toolbar, IconButton, Typography, Avatar, Tooltip, Menu, MenuItem } from "@mui/material";
import { useNavBar } from "../hooks/useNavbar";

const Navbar = () => {
  const {
    settings,
    isAnchor,
    handleOpenUserMenu,
    handleCloseUserMenu,
    handleProfileOption,
    navigate,
  } = useNavBar()

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
   
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
