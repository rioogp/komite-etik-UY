import { useOutletContext } from "react-router-dom";

import { useEffect } from "react";
import CreateFormDocuments from "../../../features/documents/CreateFormDocuments";
import usePageTitle from "../../../hooks/usePageTitle";
import HeadDashboard from "../../../components/HeadDashboard";
import DocumentsTable from "../../../features/documents/DocumentsTable";

function Documents() {
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
        <CreateFormDocuments />
      </HeadDashboard>
      <DocumentsTable />
    </main>
  );
}

export default Documents;
