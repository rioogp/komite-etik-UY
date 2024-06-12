import { CircularProgress, TableCell } from "@mui/material";
// import Table from "../../components/table/Table";
import TableStyle from "../../../components/Table";
import DocumentsReviewerRow from "./DocumentsReviewerRow";
import useFilteredDocuments from "../../../hooks/useFilteredDocuments";

function DocumentsReviewerTable() {
  const { documents, isLoading } = useFilteredDocuments(false);

  if (isLoading) {
    return (
      <div className="w-full h-full text-center">
        <CircularProgress />
      </div>
    );
  }

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.status === "Sedang Direview" &&
      doc.reviewers.every(
        (reviewer) => reviewer.status !== undefined && reviewer.status !== null
      )
  );
  return (
    <>
      <TableStyle>
        <TableStyle.Header>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Nomor
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Nama Pengaju
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Nama Penelitian
          </TableCell>

          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }} align="center">
            Status
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }} align="center">
            Aksi
          </TableCell>
        </TableStyle.Header>
        <TableStyle.Body
          data={filteredDocuments}
          render={(data) => <DocumentsReviewerRow data={data} key={data._id} />}
        />
      </TableStyle>
    </>
  );
}

export default DocumentsReviewerTable;
