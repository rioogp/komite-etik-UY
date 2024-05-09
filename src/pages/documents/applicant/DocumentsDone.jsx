import CreateFormDocuments from "../../../features/documents/CreateFormDocuments";
import usePageTitle from "../../../hooks/usePageTitle";
import HeadDashboard from "../../../components/HeadDashboard";
import DocumentsDoneTable from "../../../features/documents/DocumentsDoneTable";

function DocumentsDone() {
  usePageTitle("Berkas Selesai | Komite Etik");

  return (
    <main>
      <HeadDashboard
        title="Berkas Penelitian"
        subtitle="Berkas penelitian yang sudah diunggah di bawah ini"
        filters="filters"
        modalTitle="Pengajuan Penelitian"
        modalSubtitle="Ajukan penelitian yang ingin diajukan"
      >
        <CreateFormDocuments />
      </HeadDashboard>
      <DocumentsDoneTable />
    </main>
  );
}

export default DocumentsDone;
