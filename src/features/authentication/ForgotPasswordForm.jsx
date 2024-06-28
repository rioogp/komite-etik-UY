import * as Yup from "yup";
import { useFormik } from "formik";

import FormRowInput from "../../components/FormRowInput";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";
import { Button, TextField, ThemeProvider } from "@mui/material";
import { theme } from "../../utils/theme";
import Form from "../../components/Form";
import { useForgotPassword } from "./useForgotPassword";

function ForgotPasswordForm() {
  const { forgotPassword, isPending } = useForgotPassword();

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Email tidak valid")
          .required("Email harus diisi"),
      }),
      onSubmit: ({ email }, { setSubmitting, setErrors, resetForm }) => {
        try {
          forgotPassword(
            { email },
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
        title="Lupa Kata Sandi"
        type="primary"
        margin="mb-10"
      />

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

      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          sx={{
            marginTop: "20px",
            height: "3rem",
            fontSize: "14px",
            textTransform: "none",
          }}
          variant="contained"
          color="success"
          className="w-auto h-16"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Kirim"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default ForgotPasswordForm;
