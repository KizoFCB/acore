import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Stack, Box, Typography, Button, useTheme } from "@mui/material";
import TextInput from "components/textInput";
import CoverImage from "assets/cover.jpg";
import Logo from "assets/logo.png";

const Login = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const defaultValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  const {
    control,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const handleFormSubmit = async () => {
    const currentValues = getValues();
    console.log("form values", currentValues);
    if (isValid) {
      localStorage.setItem("token", "token");
      //   navigate(pathnames.BOOKS);
      window.location.reload();
    }
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        background: theme.palette.grey[500],
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        sx={{
          width: "80%",
          height: "60%",
          borderRadius: "16px",
          background: theme.palette.secondary.main,
        }}
        direction="row"
        justifyContent="space-between"
      >
        <Stack sx={{ padding: "32px" }} gap="16px">
          <Typography variant="subtitle1">
            Please enter your email address and password to access your account
          </Typography>

          <Stack
            width={"100%"}
            gap="20px"
            component="form"
            justifyContent="start"
          >
            <Controller
              control={control}
              name="email"
              rules={{
                required: "This field is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email format",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextInput
                  id="email"
                  value={value}
                  variant="standard"
                  type="text"
                  fullWidth
                  onChange={(event) => onChange(event.target.value)}
                  errorMessage={error?.message || ""}
                  placeholder="Email address"
                  errors={errors}
                  InputProps={{ disableUnderline: true }}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{ required: "This field is required" }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextInput
                  id="password"
                  value={value}
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  variant="standard"
                  onChange={(event) => onChange(event.target.value)}
                  errorMessage={error?.message || ""}
                  placeholder="Password"
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <Box
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          setShowPassword((prev) => !prev);
                        }}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Box>
                    ),
                  }}
                  errors={errors}
                />
              )}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "4px", maxWidth: "150px", borderRadius: "8px" }}
              onClick={handleFormSubmit}
            >
              Sign in
            </Button>
          </Stack>

          <Typography>Forgot password?</Typography>

          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{
              maxWidth: "100px",
              height: "70px",
            }}
          />
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
