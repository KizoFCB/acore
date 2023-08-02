import { pathnames } from "routes";
import theme from "theme";
import { ErrorMessage } from "@hookform/error-message";
import {
  Stack,
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import CoverImage from "assets/cover.jpeg";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
    if (isValid) {
      try {
        localStorage.setItem("token", "token");
        navigate(pathnames.BOOKS);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
                  value: /^$/,
                  message: "Please enter a valid email format",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl>
                  <TextField
                    id="email"
                    value={value}
                    variant="standard"
                    type="text"
                    fullWidth
                    onChange={(event) => onChange(event.target.value)}
                    error={error?.message ? true : false}
                    placeholder="Email address"
                    InputProps={{ disableUnderline: true }}
                    sx={{
                      borderRadius: "8px",
                      paddingInline: "8px",
                      minHeight: "50px",
                      backgroundColor: "#d3d3d3",
                    }}
                  />
                  <ErrorMessage
                    style={{
                      color: theme.palette.error.main,
                      marginTop: "16px",
                    }}
                    errors={errors}
                    name="email"
                    as="p"
                  />
                </FormControl>
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
                <FormControl>
                  <TextField
                    id="password"
                    value={value}
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    variant="standard"
                    onChange={(event) => onChange(event.target.value)}
                    error={error?.message ? true : false}
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
                    sx={{
                      borderRadius: "8px",
                      paddingInline: "8px",
                      minHeight: "50px",
                      backgroundColor: "#d3d3d3",
                    }}
                  />
                  <ErrorMessage
                    style={{
                      color: theme.palette.error.main,
                      marginTop: "16px",
                    }}
                    errors={errors}
                    name="password"
                    as="p"
                  />
                </FormControl>
              )}
            />
            <Button
              type="submit"
              disabled={!isValid}
              sx={{ marginTop: "4px", maxWidth: "150px", borderRadius: "8px" }}
              onClick={handleFormSubmit}
            >
              Sign in
            </Button>
          </Stack>

          <Typography variant="subtitle2">Forgot passowrd?</Typography>

          {/* <Box
            component="img"
            src={CoverImage}
            alt="logo"
            sx={{
              maxWidth: "200px",
              height: "70px",
            }}
          /> */}
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
