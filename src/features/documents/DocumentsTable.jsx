import { CircularProgress, TableCell } from "@mui/material";
import TableStyle from "../../components/Table";
import DocumentsRow from "./DocumentsRow";
import useFilteredDocuments from "../../hooks/useFilteredDocuments";

function DocumentsTable() {
  const { documents, isLoading } = useFilteredDocuments();

  if (isLoading) {
    return (
      <div className="w-full h-full text-center">
        <CircularProgress />
      </div>
    );
  }

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.status !== "Layak" &&
      doc.status !== "Tidak Layak" &&
      doc.status !== "Perbaikan"
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
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Status
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Download
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }} align="center">
            Aksi
          </TableCell>
        </TableStyle.Header>
        <TableStyle.Body
          data={filteredDocuments}
          render={(document, index) => (
            <DocumentsRow data={document} index={index} key={document._id} />
          )}
        />
      </TableStyle>
    </>
  );
}

export default DocumentsTable;
