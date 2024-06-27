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
    <Form onSubmit={handleSubmit}>
      <FormRowInput>
        <span className="font-medium text-sm">Nama Lengkap</span>
        <TextField
          id="name"
          value={values.name}
          variant="outlined"
          placeholder="Masukkan nama"
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{ sx: { height: "2.9rem", fontSize: 14 } }}
        />
      </FormRowInput>
      <div className="flex justify-end">
        <Button
          type="submit"
          sx={{
            marginTop: "10px",
            width: "13rem",
            textTransform: "none",
            fontSize: 13,
            height: "2.7rem",
          }}
          variant="contained"
          color="success"
          disabled={isUpdating}
        >
          {isUpdating ? "Loading..." : "Simpan Perubahan"}
        </Button>
      </div>
    </Form>
  );
}

export default EditNameForm;
