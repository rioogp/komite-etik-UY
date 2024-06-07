import { TableCell } from "@mui/material";
import TableStyle from "../../../components/Table";
import ChairDocumentsRow from "./ChairDocumentsRow";
import useFilteredDocuments from "../../../hooks/useFilteredDocuments";

function ChairDocumentsTable() {
  const { documents, isLoading } = useFilteredDocuments(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredDocuments = documents.filter(
    (doc) => doc.status === "Sedang Ditandatangani"
  );

  console.log(filteredDocuments);

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
            Aksi
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }} align="center">
            Tindakan
          </TableCell>
        </TableStyle.Header>
        <TableStyle.Body
          data={filteredDocuments}
          render={(data) => <ChairDocumentsRow data={data} key={data._id} />}
        />
      </TableStyle>
    </>
  );
}

export default ChairDocumentsTable;
