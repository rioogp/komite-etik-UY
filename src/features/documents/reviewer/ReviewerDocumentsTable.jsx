import { TableCell } from "@mui/material";
import TableStyle from "../../../components/Table";
import ReviewerDocumentsRow from "./ReviewerDocumentsRow";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import useFilteredDocuments from "../../../hooks/useFilteredDocuments";

function ReviewerDocumentsTable() {
  const { documents, isLoading } = useFilteredDocuments(false);
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
