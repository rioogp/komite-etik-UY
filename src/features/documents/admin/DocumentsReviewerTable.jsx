import { TableCell } from "@mui/material";
// import Table from "../../components/table/Table";
import TableStyle from "../../../components/Table";
import DocumentsReviewerRow from "./DocumentsReviewerRow";
import { useDocuments } from "../useDocuments";

function DocumentsReviewerTable() {
  const { isLoading, documents } = useDocuments();

  if (isLoading) {
    return <div>Loading...</div>;
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
          render={(data) => <DocumentsReviewerRow data={data} key={data._id} />}
        />
      </TableStyle>
    </>
  );
}

export default DocumentsReviewerTable;
