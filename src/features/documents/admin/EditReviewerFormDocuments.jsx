import { useFormik } from "formik";
import Form from "../../../components/Form";
import FormRowInput from "../../../components/FormRowInput";
import { useUsers } from "../../authentication/useUsers";
import * as Yup from "yup";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../utils/theme";
import { Button, MenuItem, OutlinedInput, Select } from "@mui/material";
import { useUpdateReviewers } from "./useUpdateReviewers";

function EditReviewerFormDocuments({ id }) {
  const { isLoading, users } = useUsers();
  const { updateReviewers, isUpdating } = useUpdateReviewers();
  console.log(id);
  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        reviewers: [],
      },
      validationSchema: Yup.object().shape({
        reviewers: Yup.array()
          .min(1, "Pilih setidaknya satu reviewer.")
          .required("Pilih setidaknya satu reviewer."),
      }),
      onSubmit: ({ reviewers }, { setSubmitting, setErrors, resetForm }) => {
        try {
          updateReviewers(
            { reviewers, id },
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
            console.log(error.response.data.errors);
            setErrors(error.response.data.errors);
          }
        } finally {
          setSubmitting(false);
        }
      },
    });

  if (isLoading) {
    return null;
  }

  const reviewers = users.filter((user) => user.role === "reviewer");

  return (
    <Form type="modal" onSubmit={handleSubmit}>
      <div className="flex flex-row justify-between gap-6">
        <FormRowInput>
          <span className="font-medium text-lg">Reviewer</span>
          <Select
            id="reviewers"
            name="reviewers"
            multiple
            value={values.reviewers}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            input={<OutlinedInput />}
            onBlur={handleBlur}
            error={touched.reviewers && Boolean(errors.reviewers)}
          >
            {reviewers.map((reviewer) => (
              <MenuItem id="reviewers" key={reviewer._id} value={reviewer.name}>
                {reviewer.name}
              </MenuItem>
            ))}
          </Select>
          <span className="text-red-500 text-md font-medium">
            {touched.reviewers && errors.reviewers}
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
          {isUpdating ? "Updating..." : "Kirim"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default EditReviewerFormDocuments;
