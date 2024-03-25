import { useOutletContext } from "react-router-dom";
import FilesTable from "../features/files/FilesTable";
import usePageTitle from "../hooks/usePageTitle";
import ModalComponent from "../components/ModalComponent";
import CreateFormFiles from "../features/files/CreateFormFiles";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import HeadDashboard from "../components/HeadDashboard";

function Files() {
  const [setTitle] = useOutletContext();

  setTitle("Berkas");
  usePageTitle("Berkas | Komite Etik");

  return (
    <main>
      <HeadDashboard
        title="Berkas Penelitian"
        subtitle="Berkas penelitian yang sudah diunggah di bawah ini"
        add="add"
        filters="filters"
      />
      <FilesTable />
    </main>
  );
}

export default Files;
