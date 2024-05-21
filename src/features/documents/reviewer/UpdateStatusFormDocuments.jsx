import { useFormik } from "formik";
import Form from "../../../components/Form";
import FormRowInput from "../../../components/FormRowInput";
import * as Yup from "yup";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../utils/theme";
import {
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useUpdateStatusReviewers } from "./useUpdateStatusReviewers";

function UpdateStatusFormDocuments({ id }) {
  const { updateStatus, isUpdating } = useUpdateStatusReviewers();

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        status: "",
        message: "",
      },
      validationSchema: Yup.object().shape({
        status: Yup.string().required("Status Harus diisi"),
        message: Yup.string().required("Masukan Harus diisi"),
      }),
      onSubmit: (
        { status, message },
        { setSubmitting, setErrors, resetForm }
      ) => {
        try {
          updateStatus(
            { status, message, id },
            { onSettled: () => resetForm() }
          );
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
    <Form type="modal" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-between gap-6">
        <FormRowInput>
          <span className="font-medium text-md">Pesan</span>
          <TextField
            id="message"
            placeholder="Masukkan komentar anda"
            multiline
            rows={3}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.message && Boolean(errors.message)}
            className="text-[100px]"
            sx={{ width: "600px" }}
          />
          <span className="text-red-500 text-md font-medium">
            {touched.message && errors.message}
          </span>
        </FormRowInput>
        <FormRowInput>
          <span className="font-medium text-lg">Status</span>
          <Select
            id="status"
            name="status"
            onChange={handleChange}
            input={<OutlinedInput />}
            onBlur={handleBlur}
            placeholder="Pilih status"
            error={touched.status && Boolean(errors.status)}
            defaultValue="none"
            sx={{ width: "600px" }}
          >
            <MenuItem value={"none"}>Pilih status</MenuItem>
            <MenuItem value={"Layak"}>Layak</MenuItem>
            <MenuItem value={"Perbaikan"}>Perbaikan</MenuItem>
            <MenuItem value={"Tidak Layak"}>Tidak Layak</MenuItem>
          </Select>
          <span className="text-red-500 text-md font-medium">
            {touched.status && errors.status}
          </span>
        </FormRowInput>
      </div>
      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="success"
          className="w-44 h-12"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating" : "Kirim"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default UpdateStatusFormDocuments;
