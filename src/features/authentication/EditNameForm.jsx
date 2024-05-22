import { Button, TextField } from "@mui/material";
import Form from "../../components/Form";
import FormRowInput from "../../components/FormRowInput";
import { useFormik } from "formik";
import { useUpdateName } from "./useUpdateName";

function EditNameForm({ name }) {
  const { updateName, isUpdating } = useUpdateName();

  const { handleSubmit, handleBlur, handleChange, values } = useFormik({
    initialValues: {
      name: name,
    },
    onSubmit: ({ name }, { setSubmitting, setErrors, resetForm }) => {
      try {
        updateName({ name });
      } catch (error) {
        setErrors(error.response.data.errors);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Form type="base" onSubmit={handleSubmit}>
      <FormRowInput>
        <span className="font-medium text-md">Nama</span>
        <TextField
          id="name"
          value={values.name}
          variant="outlined"
          placeholder="Masukkan nama"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormRowInput>
      <div className="flex justify-end">
        <Button
          type="submit"
          sx={{ marginTop: "10px", width: "15rem" }}
          variant="contained"
          color="success"
          className="w-auto h-14"
          disabled={isUpdating}
        >
          {isUpdating ? "Loading..." : "Simpan Perubahan"}
        </Button>
      </div>
    </Form>
  );
}

export default EditNameForm;
