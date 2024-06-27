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
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const { signup, isPending } = useSignup();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPasswordConfirm = (event) => {
    event.preventDefault();
  };

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        name: "",
        username: "",
        email: "",
        instance: "",
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
        instance: Yup.string().required("Instansi harus diisi"),
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
        { name, username, email, instance, password, confirmPassword },
        { setSubmitting, setErrors, resetForm }
      ) => {
        try {
          signup(
            {
              name,
              email,
              instance,
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
        <span className="font-medium text-sm">Nama Lengkap</span>
        <TextField
          id="name"
          name="name"
          variant="outlined"
          placeholder="Masukkan nama lengkap"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{ sx: { height: "2.9rem", fontSize: 14 } }}
          error={touched.name && Boolean(errors.name)}
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.name && errors.name}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Username</span>
        <TextField
          id="username"
          variant="outlined"
          placeholder="Masukkan username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{ sx: { height: "2.9rem", fontSize: 14 } }}
          error={touched.username && Boolean(errors.username)}
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.username && errors.username}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Email</span>
        <TextField
          id="email"
          variant="outlined"
          placeholder="Masukkan email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{ sx: { height: "2.9rem", fontSize: 14 } }}
          error={touched.email && Boolean(errors.email)}
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.email && errors.email}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Instansi</span>
        <TextField
          id="instance"
          variant="outlined"
          placeholder="Masukkan nama instansi"
          value={values.instance}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{ sx: { height: "2.9rem", fontSize: 14 } }}
          error={touched.instance && Boolean(errors.instance)}
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.instance && errors.instance}
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
                  <IoIosEyeOff size={28} />
                ) : (
                  <IoIosEye size={28} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.password && errors.password}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Konfirmasi Kata Sandi</span>
        <OutlinedInput
          id="confirmPassword"
          placeholder="Masukkan konfirmasi kata sandi"
          type={showPasswordConfirm ? "text" : "password"}
          value={values.confirmPassword}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ height: "2.9rem", fontSize: 14 }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPasswordConfirm}
                onMouseDown={handleMouseDownPasswordConfirm}
                edge="end"
              >
                {showPasswordConfirm ? (
                  <IoIosEyeOff size={28} />
                ) : (
                  <IoIosEye size={28} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <span className="text-red-500 text-sm font-medium">
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
              height: "25px",
              width: "25px",
            },
            "&.Mui-checked": {
              color: "#047e8a",
            },
          }}
        />
        <span className="text-sm">
          Saya menyatakan bahwa data yang saya isi adalah benar dan saya
          bertanggung jawab penuh atas yang saya isi
        </span>
      </label>
      <span className="text-red-500 text-sm font-medium">
        {touched.agreed && errors.agreed}
      </span>

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
