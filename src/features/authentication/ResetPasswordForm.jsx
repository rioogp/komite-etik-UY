import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  ThemeProvider,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";
import FormRowInput from "../../components/FormRowInput";
import { theme } from "../../utils/theme";
import Form from "../../components/Form";
import { useResetPassword } from "./useResetPassword";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";

function ResetPasswordForm({ token }) {
  const { resetPassword, isPending } = useResetPassword();
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        password: "",
        passwordConfirm: "",
      },
      validationSchema: Yup.object({
        password: Yup.string({
          required: "Password harus diisi",
          min: "Password minimal 8 karakter",
        }),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref("password"), null], "Konfirmasi password tidak sama")
          .required("Konfirmasi password harus diisi"),
      }),
      onSubmit: (
        { password, passwordConfirm },
        { setSubmitting, setErrors, resetForm }
      ) => {
        try {
          resetPassword(
            { token, password, passwordConfirm },
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
      <HeadingAuthentication
        title="Ubah Password"
        type="primary"
        margin="mb-10"
      />

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

      <FormRowInput>
        <span className="font-medium text-md">Konfirmasi Password</span>
        <OutlinedInput
          id="passwordConfirm"
          placeholder="Masukkan konfirmasi password"
          type={showPassword ? "text" : "password"}
          value={values.passwordConfirm}
          error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
          onChange={handleChange}
          onBlur={handleBlur}
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
          {touched.passwordConfirm && errors.passwordConfirm}
        </span>
      </FormRowInput>

      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="success"
          className="w-auto h-14"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Ubah Password"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default ResetPasswordForm;