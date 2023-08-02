import { pathnames } from "routes";
import {
  Divider,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    // navigate(pathnames.LOGIN);
    window.location.reload();
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          background: theme.palette.secondary.main,
        }}
      >
        <Typography color="primary" fontWeight={500}>
          Acore Admin Dashboard
        </Typography>
        <Typography
          onClick={handleMenuOpen}
          sx={{ cursor: "pointer" }}
          color="black"
        >
          Super Admin
        </Typography>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          id="primary-account-menu"
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "16px",
            },
          }}
        >
          <MenuItem>
            <Typography fontWeight={500}>admin@example.com</Typography>
          </MenuItem>
          <Divider sx={{ width: "100%" }} />
          <MenuItem onClick={handleLogout}>
            <Typography fontWeight={500}>Logout</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
