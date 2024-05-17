import { Button, TextField, ThemeProvider } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import Heading from "../../components/Heading";
import SectionColContainer from "../../components/SectionColContainer";
import { theme } from "../../utils/theme";
import Form from "../../components/Form";
import { useCreateReview } from "./useCreateReview";
import FormRowInput from "../../components/FormRowInput";
import { useUser } from "../authentication/useUser";

function ReviewsInput() {
  const { createReview, isPending } = useCreateReview();
  const { isLoading, user } = useUser();

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        description: "",
      },
      validationSchema: Yup.object({
        description: Yup.string().required("Ulasan harus diisi"),
      }),
      onSubmit: ({ description }, { setSubmitting, setErrors, resetForm }) => {
        const name = user?.user?.name || "Anonim";

        try {
          createReview(
            {
              name,
              description,
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

  if (isLoading && user) {
    return null;
  }

  return (
    <SectionColContainer>
      <Heading
        type="custom"
        fontSize="text-4xl md:text-5xl"
        color="text-black"
        width="max-w-[70rem]"
      >
        Berikan Ulasan
      </Heading>
      <span className="text-slate-500 text-xl md:text-2xl">
        Berikan ulasan anda mengenai website ini.
      </span>
      <ThemeProvider theme={theme}>
        <Form onSubmit={handleSubmit}>
          <FormRowInput>
            <TextField
              id="description"
              placeholder="Masukkan Ulasan Anda"
              multiline
              rows={10}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && Boolean(errors.description)}
              className="text-[100px]"
            />
            <span className="text-red-500 text-md font-medium">
              {touched.description && errors.description}
            </span>
          </FormRowInput>

          <div className="flex justify-end">
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="w-auto h-14"
              disabled={isPending}
            >
              {isPending ? "Loading..." : "Kirim Ulasan"}
            </Button>
          </div>
        </Form>
      </ThemeProvider>
    </SectionColContainer>
  );
}

export default ReviewsInput;
