import { TableCell } from "@mui/material";
import TableStyle from "../../components/Table";
import DocumentsRow from "./DocumentsRow";
import { useDocumentsByuser } from "./useDocumentsByUser";

const tempData = [
  {
    id: 1,
    nama: "John Doe",
    nama_penelitian:
      "Tinjauan Terhadap Kode Etik Organisasi: Tantangan dan Peluang di Era Digital",
  },
  {
    id: 2,
    nama: "Jane Smith",
    nama_penelitian: "Analisis Data Medis",
  },
];

function DocumentsTable() {
  const { documents, isLoading } = useDocumentsByuser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const filteredDocuments = documents.filter(
    (doc) => doc.status !== "Layak" && doc.status !== "Tidak Layak"
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
            Download
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }} align="center">
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
