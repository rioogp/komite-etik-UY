import { useFormik } from "formik";
import Form from "../../../components/Form";
import FormRowInput from "../../../components/FormRowInput";
import { useUsers } from "../../authentication/useUsers";
import * as Yup from "yup";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../utils/theme";
import { Button, MenuItem, OutlinedInput, Select } from "@mui/material";
import { useUpdateReviewers } from "./useUpdateReviewers";
import { useState } from "react";

function EditReviewerFormDocuments({ id }) {
  const { isLoading, users } = useUsers();
  const { updateReviewers, isUpdating } = useUpdateReviewers();
  const [placeholderValue, setPlaceholderValue] = useState("Pilih Reviewer");

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
          <span className="font-medium text-md">Reviewer</span>
          <Select
            id="reviewers"
            name="reviewers"
            multiple
            value={values.reviewers}
            onChange={handleChange}
            renderValue={(selected) =>
              selected.length === 0 ? placeholderValue : selected.join(", ")
            }
            input={<OutlinedInput />}
            onBlur={handleBlur}
            style={{
              height: "2.8rem",
              fontSize: 14,
              color: "#6e6d6c",
              "@media (max-width: 767.95px)": {
                fontSize: 12,
              },
            }}
            displayEmpty
            error={touched.reviewers && Boolean(errors.reviewers)}
            onOpen={() => setPlaceholderValue("")}
            onClose={() => setPlaceholderValue("Pilih Reviewer")}
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
              Pilih Reviewer
            </MenuItem>
            {reviewers.map((reviewer) => (
              <MenuItem
                style={{
                  height: "2.8rem",
                  fontSize: 14,
                  "@media (max-width: 767.95px)": {
                    fontSize: 12,
                  },
                }}
                key={reviewer._id}
                value={reviewer.name}
              >
                {reviewer.name}
              </MenuItem>
            ))}
          </Select>
          <span className="text-red-500 text-sm font-medium">
            {touched.reviewers && errors.reviewers}
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
          {isUpdating ? "Updating..." : "Kirim"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default EditReviewerFormDocuments;
