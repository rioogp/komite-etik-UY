import { Button, TextField, ThemeProvider } from "@mui/material";
import Form from "../../components/Form";
import FormRowInput from "../../components/FormRowInput";
import { theme } from "../../utils/theme";

function CreateFormDocuments() {
  return (
    <Form type="modal">
      <div className="flex flex-row justify-between gap-6">
        <FormRowInput>
          <span className="font-medium text-lg">Nama Pengaju</span>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Masukkan email"
          />
        </FormRowInput>

        <FormRowInput>
          <span className="font-medium text-lg">Nama Penelitian</span>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Masukkan email"
          />
        </FormRowInput>
      </div>
      <ThemeProvider theme={theme}>
        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="success"
          className="w-44 h-12"
        >
          Ajukan
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default CreateFormDocuments;
