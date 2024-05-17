import { Button, Divider, TextField, ThemeProvider } from "@mui/material";
import Form from "../../components/Form";
import Heading from "../../components/Heading";
import FormRowInput from "../../components/FormRowInput";
import { theme } from "../../utils/theme";

function EditProfileForm() {
  return (
    <Form type="base">
      <div className="flex flex-col gap-10">
        <div className="mt-10">
          <Heading type="primary">Profil Akun</Heading>
          <Divider color="black" />
        </div>
        <FormRowInput>
          <span className="font-medium text-md">Nama</span>
          <TextField id="name" variant="outlined" placeholder="Masukkan nama" />
        </FormRowInput>
        <FormRowInput>
          <span className="font-medium text-md">Password</span>
          <TextField
            id="password"
            variant="outlined"
            placeholder="Masukkan email/username"
          />
        </FormRowInput>
        <FormRowInput>
          <span className="font-medium text-md">Konfirmasi Password</span>
          <TextField
            id="passwordConfirm"
            variant="outlined"
            placeholder="Masukkan Konfirmasi Password"
          />
        </FormRowInput>
        <div className="flex justify-end">
          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              sx={{ marginTop: "20px", minHeight: "3.5rem", width: "15rem" }}
              variant="contained"
              color="success"
              className="w-auto h-16"
            >
              Simpan Perubahan
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </Form>
  );
}

export default EditProfileForm;
