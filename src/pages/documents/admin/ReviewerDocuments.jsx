import HeadDashboard from "../../../components/HeadDashboard";
import DocumentsReviewerTable from "../../../features/documents/admin/DocumentsReviewerTable";

function ReviewerDocuments() {
  return (
    <main>
      <HeadDashboard
        title="Pengajuan Proposal"
        subtitle="Daftar pengajuan proposal di bawah ini"
        filters="filters"
        modalTitle="Status Pengajuan"
        modalSubtitle="Status pengajuan proposal kamu dibawah ini"
      />
      <DocumentsReviewerTable />
    </main>
  );
}

export default ReviewerDocuments;
