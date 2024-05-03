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
import * as Yup from "yup";

import { theme } from "../../utils/theme";
import { useState } from "react";
import FormRowInput from "../../components/FormRowInput";
import Form from "../../components/Form";
import { useFormik } from "formik";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isPending } = useLogin();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        emailOrUsername: "",
        password: "",
      },
      validationSchema: Yup.object({
        emailOrUsername: Yup.string().required("Email/username harus diisi"),
        password: Yup.string().required("Password harus diisi"),
      }),
      onSubmit: (
        { emailOrUsername, password },
        { setSubmitting, setErrors, resetForm }
      ) => {
        try {
          login(
            { emailOrUsername, password },
            {
              onSettled: () => resetForm(),
            }
          );
          console.log(values);
        } catch (error) {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            console.log(error.response.data.errors);
            setErrors(error.response.data.errors);
          }
        } finally {
          setSubmitting(false);
        }
      },
    });

  return (
    <Form type="regular" onSubmit={handleSubmit}>
      <HeadingAuthentication title="Login" type="primary" margin="mb-12" />

      <FormRowInput>
        <span className="font-medium text-md">Username</span>
        <TextField
          id="emailOrUsername"
          variant="outlined"
          placeholder="Masukkan email/username"
          value={values.emailOrUsername}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.emailOrUsername && Boolean(errors.emailOrUsername)}
        />
        <span className="text-red-500 text-md font-medium">
          {touched.emailOrUsername && errors.emailOrUsername}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-md">Password</span>
        <OutlinedInput
          placeholder="Masukkan password"
          id="password"
          type={showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
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
        <span className="text-red-500 text-md font-medium">
          {touched.password && errors.password}
        </span>
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
          type="submit"
          sx={{ marginTop: "20px", minHeight: "3.5rem" }}
          variant="contained"
          color="success"
          className="w-auto h-16"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Login"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default LoginForm;
