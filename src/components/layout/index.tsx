import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "components/sidebar";
import Navbar from "components/navbar";

const AppLayout = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[500],
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Sidebar />
      <Box sx={{ padding: "0px 16px", width: "100%" }}>
        <Navbar />
        <Box
          component="main"
          sx={{
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
