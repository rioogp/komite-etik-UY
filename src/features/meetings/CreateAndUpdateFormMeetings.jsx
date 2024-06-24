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
import { formatMeetingSchedule } from "../../utils/helpers";
import { useUpdateMeeting } from "./useUpdateMeeting";
import HandleCreate from "../../components/HandleCreate";
import HandleUpdate from "../../components/HandleUpdate";

const validationSchema = Yup.object({
  nameMeeting: Yup.string().required("Nama pertemuan wajib diisi").trim(),
  meetingSchedule: Yup.date().required("Tanggal pertemuan wajib dipilih"),
});

function CreateAndUpdateFormMeeting({ id, onClose }) {
  const { createMeeting, isCreating } = useCreateMeeting(onClose);
  const { updateMeeting, isUpdating } = useUpdateMeeting(onClose);
  const isWorking = isCreating || isUpdating;
  console.log(id);
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
        const isoFormattedMeetingSchedule =
          formatMeetingSchedule(meetingSchedule);

        console.log(isoFormattedMeetingSchedule);
        id
          ? HandleUpdate("", "", "", () =>
              updateMeeting(
                {
                  newMeetingData: {
                    nameMeeting,
                    meetingSchedule: isoFormattedMeetingSchedule,
                  },
                  id,
                },
                {
                  onSettled: () => resetForm(),
                }
              )
            )
          : HandleCreate(() =>
              createMeeting(
                {
                  nameMeeting,
                  meetingSchedule: isoFormattedMeetingSchedule,
                },
                {
                  onSettled: () => resetForm(),
                }
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
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <FormRowInput>
          <span className="font-medium text-sm">Nama Pertemuan</span>
          <TextField
            id="nameMeeting"
            variant="outlined"
            placeholder="Masukkan nama pertemuan"
            value={values.nameMeeting}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.nameMeeting && Boolean(errors.nameMeeting)}
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
            {touched.nameMeeting && errors.nameMeeting}
          </span>
        </FormRowInput>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <FormRowInput>
            <span className="font-medium text-sm">Tanggal Pertemuan</span>
            <DatePicker
              id="meetingSchedule"
              variant="outlined"
              value={values.meetingSchedule}
              onChange={(value) => setFieldValue("meetingSchedule", value)}
              onBlur={handleBlur}
              error={touched.meetingSchedule && Boolean(errors.meetingSchedule)}
              slotProps={{
                textField: {
                  placeholder: "Pilih tanggal",
                  inputProps: {
                    style: {
                      height: "0.8rem",
                      fontSize: 13,
                      "@media (max-width: 767.95px)": {
                        fontSize: 11,
                      },
                    },
                  },
                },
              }}
            />
            <span className="text-red-500 text-sm font-medium">
              {touched.meetingSchedule && errors.meetingSchedule}
            </span>
          </FormRowInput>
        </LocalizationProvider>
      </div>
      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          sx={{ marginTop: "20px", fontSize: 12 }}
          variant="contained"
          color="success"
          className="w-36 h-10"
          disabled={isWorking}
        >
          {isWorking ? "Loading..." : "Ajukan"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default CreateAndUpdateFormMeeting;
