import { TableCell } from "@mui/material";
import TableStyle from "../../components/Table";
import DocumentsDoneRow from "./DocumentsDoneRow";
import useFilteredDocuments from "../../hooks/useFilteredDocuments";

function DocumentsDoneTable() {
  const { documents, isLoading } = useFilteredDocuments();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.status == "Layak" ||
      doc.status == "Tidak Layak" ||
      doc.status == "Perbaikan"
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
            <DocumentsDoneRow
              data={document}
              index={index}
              key={document._id}
            />
          )}
        />
      </TableStyle>
    </>
  );
}

export default DocumentsDoneTable;
