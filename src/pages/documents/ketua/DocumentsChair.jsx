import HeadDashboard from "../../../components/HeadDashboard";
import ChairDocumentsTable from "../../../features/documents/ketua/ChairDocumentsTable";
import usePageTitle from "../../../hooks/usePageTitle";

function DocumentsChair() {
  usePageTitle("Konfirmasi Berkas | Komite Etik");

  return (
    <main>
      <HeadDashboard
        title="Pengajuan Penelitian"
        subtitle="Daftar pengajuan penelitian di bawah ini"
        filters="filters"
      />
      <ChairDocumentsTable />
    </main>
  );
}

export default DocumentsChair;
