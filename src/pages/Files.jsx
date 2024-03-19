import Image from "../components/Image";
import FilesTable from "../features/files/FilesTable";
import usePageTitle from "../hooks/usePageTitle";

function Files() {
  usePageTitle("Berkas | Komite Etik");

  return (
    <>
      <FilesTable />
    </>
  );
}

export default Files;
