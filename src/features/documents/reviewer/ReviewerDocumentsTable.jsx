import { TableCell } from "@mui/material";
import TableStyle from "../../../components/Table";
import ReviewerDocumentsRow from "./ReviewerDocumentsRow";
import { useDocuments } from "../useDocuments";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const tempData = [
  {
    id: 1,
    nama: "John Doe",
    status: "Layak",
    nama_penelitian:
      "Tinjauan Terhadap Kode Etik Organisasi: Tantangan dan Peluang di Era Digital",
  },
  {
    id: 2,
    nama: "Jane Smith",
    status: "",
    nama_penelitian: "Analisis Data Medis",
  },
];

function ReviewerDocumentsTable() {
  const { isLoading, documents } = useDocuments();
  const { userId } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredDocuments = documents.filter((doc) =>
    doc.reviewers.some(
      (reviewer) =>
        reviewer._id === userId && !reviewer.hasOwnProperty("status")
    )
  );

  return (
    <>
      <TableStyle>
        <TableStyle.Header>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Nomor
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Nama Pengaju
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Nama Penelitian
          </TableCell>

          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }} align="center">
            Status
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }} align="center">
            Aksi
          </TableCell>
        </TableStyle.Header>
        <TableStyle.Body
          data={filteredDocuments}
          render={(data) => <ReviewerDocumentsRow data={data} key={data._id} />}
        />
      </TableStyle>
    </>
  );
}

export default ReviewerDocumentsTable;
