import { Stack, Box, Typography } from "@mui/material";
import CoverImage from "assets/cover.jpeg";

const Login = () => {
  return (
    <Stack
      sx={{ width: "100%", height: "100%", background: "lightblue" }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        sx={{
          width: "80%",
          height: "60%",
          borderRadius: "16px",
          background: "white",
        }}
        direction="row"
        justifyContent="space-between"
      >
        <Stack sx={{ padding: "32px" }}>
          <Typography variant="subtitle1">
            Please enter your email address and password to access your account
          </Typography>
        </Stack>
        <Box
          component="img"
          src={CoverImage}
          alt="landing image"
          sx={{
            maxWidth: "40%",
            height: "100%",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Login;
