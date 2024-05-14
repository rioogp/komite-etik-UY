import usePageTitle from "../../../hooks/usePageTitle";
import HeadDashboard from "../../../components/HeadDashboard";
import DocumentsTable from "../../../features/documents/DocumentsTable";
import CreateUpdateFormDocuments from "../../../features/documents/CreateUpdateFormDocuments";

function Documents() {
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
        <CreateUpdateFormDocuments />
      </HeadDashboard>
      <DocumentsTable />
    </main>
  );
}

export default Documents;
