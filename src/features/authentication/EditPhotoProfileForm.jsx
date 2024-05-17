import { Avatar, Button, ThemeProvider } from "@mui/material";
import { theme } from "../../utils/theme";
import Form from "../../components/Form";
import { useFormik } from "formik";
import { useUpdatePhotoProfile } from "./useUpdateProfile";
import { useEffect, useState } from "react";

function EditPhotoProfileForm({ user }) {
  const { updatePhoto, isUpdating } = useUpdatePhotoProfile();
  const [preview, setPreview] = useState(user ? user.photoURL : null);

  const { values, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      photo: null,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("photo", values.photo);
      updatePhoto(formData);
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFieldValue("photo", file);

    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  };

  useEffect(() => {
    if (user && user.photoURL) {
      setPreview(user.photoURL);
    }
  }, [user, setFieldValue]);

  return (
    <Form type="modal" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-12 justify-center items-center">
        <label htmlFor="photo-upload">
          <Avatar
            alt="User Image"
            src={preview}
            sx={{ width: 300, height: 300 }}
          />
        </label>
        <input
          id="photo-upload"
          name="photo"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            sx={{ textTransform: "none", fontSize: "16px" }}
            variant="contained"
            color="success"
            className="w-56 h-14"
            disabled={isUpdating}
          >
            {isUpdating ? "Loading..." : "Simpan Perubahan"}
          </Button>
        </ThemeProvider>
      </div>
    </Form>
  );
}

export default EditPhotoProfileForm;
