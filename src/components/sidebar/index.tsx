import { useTheme, Stack, Typography, Box } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Logo from "assets/logo.png";

const Sidebar = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        padding: "8px",
        background: theme.palette.secondary.main,
        width: "300px",
        height: "100%",
      }}
    >
      <Box component="img" src={Logo} alt="logo" sx={{ padding: "16px" }} />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="24px"
        sx={{
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
