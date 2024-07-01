import LinkRoute from "../../components/LinkRoute";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";
import {
  Button,
  CircularProgress,
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
        } catch (error) {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            setErrors(error.response.data.errors);
          }
        } finally {
          setSubmitting(false);
        }
      },
    });

  return (
    <Form type="regular" onSubmit={handleSubmit}>
      <HeadingAuthentication title="Masuk" type="primary" margin="mb-8" />

      <FormRowInput>
        <span className="font-medium text-sm">Email/Username</span>
        <TextField
          id="emailOrUsername"
          variant="outlined"
          placeholder="Masukkan email/username"
          value={values.emailOrUsername}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{ sx: { height: "2.9rem", fontSize: 14 } }}
          error={touched.emailOrUsername && Boolean(errors.emailOrUsername)}
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.emailOrUsername && errors.emailOrUsername}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Kata Sandi</span>
        <OutlinedInput
          placeholder="Masukkan kata sandi"
          id="password"
          type={showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ height: "2.9rem", fontSize: 14 }}
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
                  <IoIosEyeOff size={24} />
                ) : (
                  <IoIosEye size={24} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.password && errors.password}
        </span>
      </FormRowInput>

      <span className="text-sm">
        Belum punya akun? Daftar&nbsp;
        <LinkRoute to="/register" type="secondary">
          di sini
        </LinkRoute>
      </span>
      <LinkRoute type="secondary" to="/forgot-password">
        Lupa Kata Sandi
      </LinkRoute>
      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          sx={{
            marginTop: "20px",
            minHeight: "3rem",
            fontSize: "14px",
            textTransform: "none",
          }}
          variant="contained"
          color="success"
          className="w-auto h-12"
          disabled={isPending}
        >
          {isPending ? <CircularProgress size={16} /> : "Masuk"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default LoginForm;
