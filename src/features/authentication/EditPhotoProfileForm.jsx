import { Avatar, Button, ThemeProvider } from "@mui/material";
import { theme } from "../../utils/theme";
import Form from "../../components/Form";
import { useFormik } from "formik";
import { useUpdatePhotoProfile } from "./useUpdateProfile";
import { useEffect, useState } from "react";

function EditPhotoProfileForm({ user, onClose }) {
  const { updatePhoto, isUpdating } = useUpdatePhotoProfile(onClose);
  const [preview, setPreview] = useState(user.user.photo);

  const { handleSubmit, setFieldValue } = useFormik({
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
    if (user && user.user.photo) {
      setPreview(user.user.photo);
    }
  }, [user, setFieldValue]);

  return (
    <Form type="modal" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-12 justify-center items-center">
        <label htmlFor="photo-upload">
          <Avatar
            alt="User Image"
            src={preview}
            sx={{ width: 250, height: 250 }}
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
            sx={{ textTransform: "none", fontSize: 14 }}
            variant="contained"
            color="success"
            className="w-52 h-12"
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
