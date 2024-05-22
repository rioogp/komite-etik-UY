import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Form from "../../components/Form";
import FormRowInput from "../../components/FormRowInput";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUpdatePassword } from "./useUpdatePassword";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../../contexts/AuthContext";

function EditPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const { logout } = useContext(AuthContext);
  const { updatePassword, isUpdating } = useUpdatePassword(logout);

  const handleClickShowCurrentPassword = () =>
    setShowCurrentPassword((show) => !show);

  const handleMouseDownCurrentPassword = (event) => {
    event.preventDefault();
  };
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
        currentPassword: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: Yup.object({
        currentPassword: Yup.string()
          .min(8, "Password minimal 8 karakter")
          .required("Password harus diisi"),
        password: Yup.string()
          .min(8, "Password minimal 8 karakter")
          .required("Password harus diisi"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Konfirmasi password tidak sama")
          .required("Konfirmasi password harus diisi"),
      }),
      onSubmit: (
        { currentPassword, password, confirmPassword },
        { setSubmitting, setErrors, resetForm }
      ) => {
        try {
          updatePassword(
            {
              currentPassword,
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
    <Form type="base" onSubmit={handleSubmit}>
      <FormRowInput>
        <span className="font-medium text-md">Password Lama</span>
        <OutlinedInput
          placeholder="Masukkan password"
          id="currentPassword"
          type={showCurrentPassword ? "text" : "password"}
          value={values.currentPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.currentPassword && Boolean(errors.currentPassword)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowCurrentPassword}
                onMouseDown={handleMouseDownCurrentPassword}
                edge="end"
              >
                {showCurrentPassword ? (
                  <IoIosEyeOff size={28} />
                ) : (
                  <IoIosEye size={28} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <span className="text-red-500 text-md font-medium">
          {touched.currentPassword && errors.currentPassword}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-md">Password Baru</span>
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
        <span className="font-medium text-md">Konfirmasi Password Baru</span>
        <OutlinedInput
          placeholder="Masukkan konfirmasi password baru"
          id="confirmPassword"
          type={showPasswordConfirm ? "text" : "password"}
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
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
        <span className="text-red-500 text-md font-medium">
          {touched.confirmPassword && errors.confirmPassword}
        </span>
      </FormRowInput>

      <div className="flex justify-end">
        <Button
          type="submit"
          sx={{ marginTop: "20px", minHeight: "3.5rem", width: "15rem" }}
          variant="contained"
          color="success"
          className="w-auto h-12"
          disabled={isUpdating}
        >
          {isUpdating ? "Loading..." : "Simpan Perubahan"}
        </Button>
      </div>
    </Form>
  );
}

export default EditPasswordForm;
