import FormRowInput from "../../components/FormRowInput";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";
import { Button, TextField, ThemeProvider } from "@mui/material";
import { theme } from "../../utils/theme";
import Form from "../../components/Form";

function ForgotPasswordForm() {
  return (
    <Form type="regular">
      <HeadingAuthentication
        title="Lupa Password"
        type="primary"
        margin="mb-10"
      />

      <FormRowInput>
        <span className="font-medium text-md">Email</span>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Masukkan email"
        />
      </FormRowInput>

      <ThemeProvider theme={theme}>
        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="success"
          className="w-auto h-16"
        >
          Kirim
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default ForgotPasswordForm;
