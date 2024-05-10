import HeadDashboard from "../../../components/HeadDashboard";
import ChairDocumentsTable from "../../../features/documents/ketua/ChairDocumentsTable";

function DocumentsChair() {
  return (
    <main>
      <HeadDashboard
        title="Pengajuan Proposal"
        subtitle="Daftar pengajuan proposal di bawah ini"
        filters="filters"
      />
      <ChairDocumentsTable />
    </main>
  );
}

export default DocumentsChair;
