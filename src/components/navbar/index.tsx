import { pathnames } from "@/routes";
import { Divider, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
    navigate(pathnames.LOGIN);
  };

  return (
    <Stack
      sx={{ background: "white" }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography>Acore Admin Dashboard</Typography>
      <Typography onClick={handleMenuOpen}>Super Admin</Typography>
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
            width: "100px",
            height: "200px",
            overflowY: "hidden",
          },
        }}
      >
        <MenuItem sx={{ height: "64px" }}>
          <Typography variant="h4" fontWeight={500}>
            admin@example.com
          </Typography>
        </MenuItem>
        <Divider sx={{ width: "100%" }} />
        <MenuItem onClick={handleLogout} sx={{ height: "64px" }}>
          <Typography variant="h4" fontWeight={500}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default Navbar;
