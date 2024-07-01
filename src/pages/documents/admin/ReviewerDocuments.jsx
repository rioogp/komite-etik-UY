import HeadDashboard from "../../../components/HeadDashboard";
import DocumentsReviewerTable from "../../../features/documents/admin/DocumentsReviewerTable";
import usePageTitle from "../../../hooks/usePageTitle";

function ReviewerDocuments() {
  usePageTitle("Berkas Reviewer | Komite Etik");

  return (
    <main>
      <HeadDashboard
        title="Pengajuan Penelitian"
        subtitle="Daftar pengajuan penelitian di bawah ini"
        filters="filters"
      />
      <DocumentsReviewerTable />
    </main>
  );
}

export default ReviewerDocuments;
