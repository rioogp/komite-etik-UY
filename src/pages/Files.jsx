import { useOutletContext } from "react-router-dom";
import FilesTable from "../features/files/FilesTable";
import usePageTitle from "../hooks/usePageTitle";

function Files() {
  const [setTitle] = useOutletContext();

  setTitle("Berkas");
  usePageTitle("Berkas | Komite Etik");

  return (
    <>
      <FilesTable />
    </>
  );
}

export default Files;
