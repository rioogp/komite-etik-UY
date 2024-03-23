import { useOutletContext } from "react-router-dom";
import FilesTable from "../features/files/FilesTable";
import usePageTitle from "../hooks/usePageTitle";
import ModalComponent from "../components/ModalComponent";
import CreateFormFiles from "../features/files/CreateFormFiles";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";

function Files() {
  const [setTitle] = useOutletContext();

  setTitle("Berkas");
  usePageTitle("Berkas | Komite Etik");

  return (
    <main>
      <ThemeProvider theme={theme}>
        <ModalComponent>
          <ModalComponent.OpenButton>
            <Button
              sx={{ marginTop: "20px" }}
              variant="contained"
              color="success"
              className="w-44 h-12"
            >
              Ajukan
            </Button>
          </ModalComponent.OpenButton>
          <ModalComponent.ModalWindow>
            <CreateFormFiles />
          </ModalComponent.ModalWindow>
        </ModalComponent>

        <FilesTable />
      </ThemeProvider>
    </main>
  );
}

export default Files;
