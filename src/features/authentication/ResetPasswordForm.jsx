import { Button, ThemeProvider } from "@mui/material";
import ContainerFormLayout from "../../components/authentication/ContainerFormLayout";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";
import FormRowInput from "../../components/FormRowInput";
import { theme } from "../../utils/theme";

function ResetPasswordForm() {
  return (
    <ContainerFormLayout paddingVertical="py-36">
      <HeadingAuthentication
        title="Ubah Password"
        type="primary"
        margin="mb-10"
      />

      <FormRowInput>
        <span className="font-medium text-sm">Password Baru</span>
        <Input type="text" placeholder="Masukkan Password Baru" />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Konfirmasi Password Baru</span>
        <Input type="text" placeholder="Masukkan Konfirmasi Password Baru" />
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
    </ContainerFormLayout>
  );
}

export default ResetPasswordForm;
