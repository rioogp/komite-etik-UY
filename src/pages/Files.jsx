import { useOutletContext } from "react-router-dom";
import FilesTable from "../features/files/FilesTable";
import usePageTitle from "../hooks/usePageTitle";

import HeadDashboard from "../components/HeadDashboard";
import { useEffect } from "react";
import CreateFormFiles from "../features/files/CreateFormFiles";

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
        modalTitle="Pengajuan Penelitian"
        modalSubtitle="Ajukan penelitian yang ingin diajukan"
      >
        <CreateFormFiles />
      </HeadDashboard>
      <FilesTable />
    </main>
  );
}

export default Files;
