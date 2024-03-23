import LinkRoute from "../../components/LinkRoute";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { theme } from "../../utils/theme";
import { useState } from "react";
import FormRowInput from "../../components/FormRowInput";
import Form from "../../components/Form";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Form type="regular">
      <HeadingAuthentication title="Login" type="primary" margin="mb-12" />

      <FormRowInput>
        <span className="font-medium text-md">Username</span>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Masukkan username"
        />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-md">Password</span>
        <OutlinedInput
          placeholder="Masukkan password"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <IoIosEyeOff size={28} />
                ) : (
                  <IoIosEye size={28} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormRowInput>

      <span className="text-md">
        Belum punya akun? Daftar&nbsp;
        <LinkRoute to="/register" type="secondary">
          di sini
        </LinkRoute>
      </span>
      <LinkRoute type="secondary" to="/forgot-password">
        Forgot Password
      </LinkRoute>
      <ThemeProvider theme={theme}>
        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="success"
          className="w-auto h-14"
        >
          Login
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default LoginForm;
