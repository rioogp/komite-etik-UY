import { useOutletContext } from "react-router-dom";
import FilesTable from "../features/files/FilesTable";
import usePageTitle from "../hooks/usePageTitle";

import HeadDashboard from "../components/HeadDashboard";
import { useEffect } from "react";

function Files() {
  const [setValTitle] = useOutletContext();

  useEffect(() => {
    setValTitle("Berkas");
  }, []);
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
