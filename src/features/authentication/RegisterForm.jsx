import FormRowInput from "../../components/FormRowInput";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";
import { ThemeProvider } from "@emotion/react";
import {
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";
import { theme } from "../../utils/theme";
import { useState } from "react";
import Form from "../../components/Form";
import { useSignup } from "./useSignup";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isPending } = useSignup();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreed: false,
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Nama harus diisi"),
        username: Yup.string().required("Username harus diisi"),
        email: Yup.string()
          .email("Email tidak valid")
          .required("Email harus diisi"),
        password: Yup.string()
          .min(8, "Password minimal 8 karakter")
          .required("Password harus diisi"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Konfirmasi password tidak sama")
          .required("Konfirmasi password harus diisi"),
        agreed: Yup.boolean().oneOf(
          [true],
          "Anda harus menyetujui persyaratan"
        ),
      }),
      onSubmit: (
        { name, username, email, password, confirmPassword },
        { setSubmitting, setErrors, resetForm }
      ) => {
        try {
          signup(
            {
              name,
              email,
              username,
              password,
              passwordConfirm: confirmPassword,
            },
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
      <HeadingAuthentication
        title="Lengkapi Data Berikut"
        margin="mb-5"
        type="other"
      />

      <FormRowInput>
        <span className="font-medium text-md">Nama</span>
        <TextField
          id="name"
          name="name"
          variant="outlined"
          placeholder="Masukkan nama"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
        />
        <span className="text-red-500 text-md font-medium">
          {touched.name && errors.name}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-md">Username</span>
        <TextField
          id="username"
          variant="outlined"
          placeholder="Masukkan username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
        />
        <span className="text-red-500 text-md font-medium">
          {touched.username && errors.username}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-md">Email</span>
        <TextField
          id="email"
          variant="outlined"
          placeholder="Masukkan email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
        />
        <span className="text-red-500 text-md font-medium">
          {touched.email && errors.email}
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

      <FormRowInput>
        <span className="font-medium text-md">Konfirmasi Password</span>
        <OutlinedInput
          id="confirmPassword"
          placeholder="Masukkan konfirmasi password"
          type={showPassword ? "text" : "password"}
          value={values.confirmPassword}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
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
          {touched.confirmPassword && errors.confirmPassword}
        </span>
      </FormRowInput>

      <label className="flex items-center gap-4">
        <Checkbox
          id="agreed"
          checked={values.agreed}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.agreed && Boolean(errors.agreed)}
          sx={{
            color: "#006A74",
            "& .MuiSvgIcon-root": {
              height: "30px",
              width: "30px",
            },
            "&.Mui-checked": {
              color: "#047e8a",
            },
          }}
        />
        <span className="text-md">
          Saya menyatakan bahwa data yang saya isi adalah benar dan saya
          bertanggung jawab penuh atas yang saya isi
        </span>
      </label>
      <span className="text-red-500 text-md font-medium">
        {touched.agreed && errors.agreed}
      </span>

      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          sx={{ marginTop: "20px", minHeight: "3.5rem" }}
          variant="contained"
          color="success"
          className="w-auto h-16"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Daftar"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default RegisterForm;
