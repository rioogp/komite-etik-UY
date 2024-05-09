import HeadDashboard from "../../../components/HeadDashboard";
import ReviewerDocumentsTable from "../../../features/documents/reviewer/ReviewerDocumentsTable";
import usePageTitle from "../../../hooks/usePageTitle";

function DocumentsReviewer() {
  usePageTitle("Berkas | Komite Etik");

  return (
    <main>
      <HeadDashboard
        title="Daftar Berkas"
        subtitle="Daftar berkas dapat dilihat dibawah ini"
        filters="filters"
        modalTitle="Status Berkas"
        modalSubtitle="Berikan status berkas layak atau tidak layak"
      />
      <ReviewerDocumentsTable />
    </main>
  );
}

export default DocumentsReviewer;
