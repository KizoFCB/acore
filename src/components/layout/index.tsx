import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* <SideBar /> */}
      <Box sx={{ padding: "0.75rem 0rem", width: "100%" }}>
        {/* <Navbar /> */}
        <Box
          sx={{
            backgroundColor: theme.palette.grey[50],
            borderRadius: "40px 0 0 40px",
            width: "100%",
            height: "100%",
            overflow: "overlay",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
