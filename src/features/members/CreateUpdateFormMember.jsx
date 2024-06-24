import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";
import Form from "../../components/Form";
import FormRowInput from "../../components/FormRowInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { theme } from "../../utils/theme";
import { useCreateUser } from "../authentication/useCreateUser";
import { useUpdateUser } from "../authentication/useUpdateUser";
import { useUserById } from "../authentication/useUserById";
import HandleCreate from "../../components/HandleCreate";
import HandleUpdate from "../../components/HandleUpdate";

function CreateUpdateFormMember({ onClose, id }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { createUser, isCreating } = useCreateUser();
  const { updateUser, isUpdating } = useUpdateUser();
  const { user, isLoading } = id
    ? useUserById(id)
    : { user: null, isLoading: false };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
    setValues,
  } = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      instance: "",
      role: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nama wajib diisi"),
      username: Yup.string().required("Username wajib diisi"),
      email: Yup.string()
        .email("Email tidak valid")
        .required("Email wajib diisi"),
      instance: Yup.string().required("Instance wajib diisi"),
      role: Yup.string().required("Role wajib diisi"),
      password: Yup.string()
        .required("Password wajib diisi")
        .min(8, "Password minimal 8 karakter"),
    }),
    onSubmit: (
      { name, username, email, instance, role, password },
      { setSubmitting, setErrors, resetForm }
    ) => {
      try {
        id
          ? HandleUpdate(
              "Anggota",
              "Apakah anda yakin ingin mengubah data anggota ini?",
              "Ya",
              () =>
                updateUser(
                  { name, username, email, instance, role, password, id },
                  {
                    onSettled: () => {
                      resetForm();
                      onClose();
                    },
                  }
                )
            )
          : HandleCreate(() =>
              createUser(
                { name, username, email, instance, role, password },
                {
                  onSettled: () => {
                    resetForm();
                    onClose();
                  },
                }
              )
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

  useEffect(() => {
    if (id && user) {
      setValues({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        instance: user.instance || "",
        role: user.role || "",
        password: "",
      });
    }
  }, [user, setValues]);

  if (isLoading) {
    return (
      <div className="w-full h-full text-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Form type="modal" onSubmit={handleSubmit}>
      <FormRowInput>
        <span className="font-medium text-sm">Nama Anggota</span>
        <TextField
          fullWidth
          id="name"
          name="name"
          placeholder="Nama Anggota"
          margin="normal"
          value={values.name}
          onChange={handleChange}
          error={touched.name && Boolean(errors.name)}
          InputProps={{
            sx: {
              height: "2.8rem",
              fontSize: 14,
              "@media (max-width: 767.95px)": {
                fontSize: 12,
              },
            },
          }}
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.name && errors.name}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Username</span>
        <TextField
          fullWidth
          id="username"
          name="username"
          placeholder="Username"
          margin="normal"
          value={values.username}
          onChange={handleChange}
          InputProps={{
            sx: {
              height: "2.8rem",
              fontSize: 14,
              "@media (max-width: 767.95px)": {
                fontSize: 12,
              },
            },
          }}
          error={touched.username && Boolean(errors.username)}
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.username && errors.username}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Email</span>
        <TextField
          fullWidth
          id="email"
          name="email"
          placeholder="Masukkan Email"
          margin="normal"
          value={values.email}
          onChange={handleChange}
          InputProps={{
            sx: {
              height: "2.8rem",
              fontSize: 14,
              "@media (max-width: 767.95px)": {
                fontSize: 12,
              },
            },
          }}
          error={touched.email && Boolean(errors.email)}
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.email && errors.email}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Instansi</span>
        <TextField
          fullWidth
          id="instance"
          name="instance"
          placeholder="Masukkan Nama Instansi"
          margin="normal"
          value={values.instance}
          onChange={handleChange}
          InputProps={{
            sx: {
              height: "2.8rem",
              fontSize: 14,
              "@media (max-width: 767.95px)": {
                fontSize: 12,
              },
            },
          }}
          error={touched.instance && Boolean(errors.instance)}
        />
        <span className="text-red-500 text-sm font-medium">
          {touched.instance && errors.instance}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-lg">Role</span>
        <FormControl
          fullWidth
          margin="normal"
          error={touched.role && Boolean(errors.role)}
        >
          <Select
            id="role"
            name="role"
            value={values.role}
            onChange={handleChange}
            placeholder="Pilih Role"
            style={{
              height: "2.8rem",
              fontSize: 14,
              color: "#585858",
              "@media (max-width: 767.95px)": {
                fontSize: 12,
              },
            }}
            displayEmpty
          >
            <MenuItem
              value=""
              disabled
              style={{
                height: "2.8rem",
                fontSize: 14,
                "@media (max-width: 767.95px)": {
                  fontSize: 12,
                },
              }}
            >
              Pilih Role
            </MenuItem>
            <MenuItem
              value="ketua"
              style={{
                height: "2.8rem",
                fontSize: 14,
                "@media (max-width: 767.95px)": {
                  fontSize: 12,
                },
              }}
            >
              Ketua
            </MenuItem>
            <MenuItem
              value="reviewer"
              style={{
                height: "2.8rem",
                fontSize: 14,
                "@media (max-width: 767.95px)": {
                  fontSize: 12,
                },
              }}
            >
              Reviewer
            </MenuItem>
          </Select>
        </FormControl>
        <span className="text-red-500 text-sm font-medium">
          {touched.role && errors.role}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Password</span>
        <OutlinedInput
          placeholder="Masukkan password"
          id="password"
          type={showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          style={{
            height: "2.8rem",
            fontSize: 14,
            "@media (max-width: 767.95px)": {
              fontSize: 12,
            },
          }}
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

      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          sx={{ marginTop: "20px", fontSize: 12 }}
          variant="contained"
          color="success"
          className="w-36 h-10"
          disabled={id ? isUpdating : isCreating}
        >
          {id
            ? isUpdating
              ? "Loading..."
              : "Ubah"
            : isCreating
            ? "Loading..."
            : "Tambah"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default CreateUpdateFormMember;
