import { Button, TextField, ThemeProvider } from "@mui/material";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";
import FormRowInput from "../../components/FormRowInput";
import { theme } from "../../utils/theme";
import Form from "../../components/Form";

function ResetPasswordForm() {
  return (
    <Form type="regular">
      <HeadingAuthentication
        title="Ubah Password"
        type="primary"
        margin="mb-10"
      />

      <FormRowInput>
        <span className="font-medium text-md">Password baru</span>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Masukkan username"
        />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-md">Konfirmasi Password Baru</span>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Masukkan Konfirmasi Password Baru"
        />
      </FormRowInput>

      <ThemeProvider theme={theme}>
        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="success"
          className="w-auto h-14"
        >
          Ubah
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default ResetPasswordForm;
