import { Button, TextField, ThemeProvider } from "@mui/material";
import Form from "../../components/Form";
import FormRowInput from "../../components/FormRowInput";

import { theme } from "../../utils/theme";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateMeeting } from "./useCreateMeeting";

const validationSchema = Yup.object({
  nameMeeting: Yup.string().required("Nama pertemuan wajib diisi").trim(),
  meetingSchedule: Yup.date().required("Tanggal pertemuan wajib dipilih"),
});

function CreateFormMeetings() {
  const { createMeeting, isPending } = useCreateMeeting();

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormik({
    initialValues: {
      nameMeeting: "",
      meetingSchedule: null,
    },
    validationSchema,
    onSubmit: (
      { nameMeeting, meetingSchedule },
      { setSubmitting, setErrors, resetForm }
    ) => {
      try {
        const formattedMeetingSchedule = meetingSchedule
          ? new Date(meetingSchedule)
          : null;
        const isoFormattedMeetingSchedule = formattedMeetingSchedule
          ? formattedMeetingSchedule.toISOString()
          : null;

        console.log(isoFormattedMeetingSchedule);
        createMeeting(
          {
            nameMeeting: nameMeeting,
            meetingSchedule: isoFormattedMeetingSchedule,
          },
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
    <Form type="modal" onSubmit={handleSubmit}>
      <div className="flex flex-row justify-between gap-6">
        <FormRowInput>
          <span className="font-medium text-lg">Nama Pertemuan</span>
          <TextField
            id="nameMeeting"
            variant="outlined"
            placeholder="Masukkan nama pertemuan"
            value={values.nameMeeting}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.nameMeeting && Boolean(errors.nameMeeting)}
          />
          <span className="text-red-500 text-md font-medium">
            {touched.nameMeeting && errors.nameMeeting}
          </span>
        </FormRowInput>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <FormRowInput>
            <span className="font-medium text-lg">Tanggal Pertemuan</span>
            <DatePicker
              id="meetingSchedule"
              variant="outlined"
              value={values.meetingSchedule}
              onChange={(value) => setFieldValue("meetingSchedule", value)}
              onBlur={handleBlur}
              error={touched.meetingSchedule && Boolean(errors.meetingSchedule)}
              slotProps={{ textField: { placeholder: "Pilih tanggal" } }}
            />
            <span className="text-red-500 text-md font-medium">
              {touched.meetingSchedule && errors.meetingSchedule}
            </span>
          </FormRowInput>
        </LocalizationProvider>
      </div>
      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="success"
          className="w-44 h-12"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Ajukan"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default CreateFormMeetings;
