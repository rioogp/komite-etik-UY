import HeadDashboard from "../../../components/HeadDashboard";
import DocumentsReviewerTable from "../../../features/documents/admin/DocumentsReviewerTable";

function ReviewerDocuments() {
  return (
    <main>
      <HeadDashboard
        title="Pengajuan Proposal"
        subtitle="Daftar pengajuan proposal di bawah ini"
        filters="filters"
      />
      <DocumentsReviewerTable />
    </main>
  );
}

export default ReviewerDocuments;
