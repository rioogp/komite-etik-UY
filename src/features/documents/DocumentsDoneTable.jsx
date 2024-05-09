import { TableCell } from "@mui/material";
import TableStyle from "../../components/Table";
import { useDocumentsByuser } from "./useDocumentsByUser";
import DocumentsDoneRow from "./DocumentsDoneRow";

function DocumentsDoneTable() {
  const { documents, isLoading } = useDocumentsByuser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const filteredDocuments = documents.filter(
    (doc) => doc.status == "Layak" || doc.status == "Tidak Layak"
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
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Status
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Download
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }} align="center">
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
