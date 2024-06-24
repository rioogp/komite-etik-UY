import { useFormik } from "formik";
import Form from "../../../components/Form";
import FormRowInput from "../../../components/FormRowInput";
import * as Yup from "yup";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../utils/theme";
import {
  Box,
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useUpdateStatusReviewers } from "./useUpdateStatusReviewers";
import HandleUpdate from "../../../components/HandleUpdate";

function UpdateStatusFormDocuments({ id, onClose }) {
  const { updateStatus, isUpdating } = useUpdateStatusReviewers(onClose);

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
          HandleUpdate(
            "Status",
            "Apakah anda yakin untuk status yang sudah anda berikan pada berkas ini?",
            "Ya",
            () =>
              updateStatus(
                { status, message, id },
                { onSettled: () => resetForm() }
              )
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
            InputProps={{
              sx: {
                fontSize: 14,
                width: "600px",
                "@media (max-width: 767.95px)": {
                  fontSize: 12,
                  width: "250px",
                },
              },
            }}
          />
          <span className="text-red-500 text-sm font-medium">
            {touched.message && errors.message}
          </span>
        </FormRowInput>
        <FormRowInput>
          <span className="font-medium text-md">Status</span>
          <Box
            sx={{
              width: "600px",
              "@media (max-width: 767.95px)": {
                width: "250px",
              },
            }}
          >
            <Select
              id="status"
              name="status"
              onChange={handleChange}
              input={<OutlinedInput />}
              onBlur={handleBlur}
              placeholder="Pilih status"
              error={touched.status && Boolean(errors.status)}
              defaultValue="none"
              displayEmpty
              sx={{
                height: "2.8rem",
                fontSize: 14,
                color: "black",
                "& .MuiOutlinedInput-root": {
                  "@media (max-width: 767.95px)": {
                    fontSize: 12,
                  },
                },
              }}
              fullWidth
            >
              <MenuItem
                sx={{
                  height: "2.8rem",
                  fontSize: 14,
                  "@media (max-width: 767.95px)": {
                    fontSize: 12,
                  },
                }}
                disabled
                value={"none"}
              >
                Pilih status
              </MenuItem>

              <MenuItem
                sx={{
                  height: "2.8rem",
                  fontSize: 14,
                  "@media (max-width: 767.95px)": {
                    fontSize: 12,
                  },
                }}
                value={"Layak"}
              >
                Layak
              </MenuItem>
              <MenuItem
                sx={{
                  height: "2.8rem",
                  fontSize: 14,
                  "@media (max-width: 767.95px)": {
                    fontSize: 12,
                  },
                }}
                value={"Perbaikan"}
              >
                Perbaikan
              </MenuItem>
              <MenuItem
                sx={{
                  height: "2.8rem",
                  fontSize: 14,
                  "@media (max-width: 767.95px)": {
                    fontSize: 12,
                  },
                }}
                value={"Tidak Layak"}
              >
                Tidak Layak
              </MenuItem>
            </Select>
          </Box>
          <span className="text-red-500 text-sm font-medium">
            {touched.status && errors.status}
          </span>
        </FormRowInput>
      </div>
      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          sx={{ marginTop: "20px", fontSize: 13, textTransform: "none" }}
          variant="contained"
          color="success"
          className="w-40 h-10"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating" : "Kirim"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default UpdateStatusFormDocuments;
