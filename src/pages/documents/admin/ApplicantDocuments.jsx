import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import HeadDashboard from "../../../components/HeadDashboard";
import DocumentsApplicantTable from "../../../features/documents/admin/DocumentsApplicantTable";

function ApplicantDocuments() {
  const [setValTitle] = useOutletContext();

  useEffect(() => {
    setValTitle("Berkas");
  }, []);
  usePageTitle("Berkas Pengaju | Komite Etik");

  return (
    <main>
      <HeadDashboard
        title="Pengajuan Proposal"
        subtitle="Daftar pengajuan proposal di bawah ini"
        filters="filters"
      />
      <DocumentsApplicantTable />
    </main>
  );
}

export default ApplicantDocuments;
