import { useTheme, Stack, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Logo from "assets/logo.png";
import { pathnames } from "routes";

const Sidebar = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleHomeNavigation = () => {
    navigate(pathnames.BOOKS);
  };

  return (
    <Stack
      sx={{
        padding: "8px",
        background: theme.palette.secondary.main,
        width: "300px",
        height: "100%",
      }}
    >
      <Box
        component="img"
        src={Logo}
        alt="logo"
        onClick={handleHomeNavigation}
        sx={{ padding: "16px", cursor: "pointer", marginBottom: "16px" }}
      />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="24px"
        sx={{
          cursor: "pointer",
          height: "80px",
          background: theme.palette.grey[500],
          borderRight: "4px solid #C41E3A",
        }}
      >
        <LibraryBooksIcon />
        <Typography>Books</Typography>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
