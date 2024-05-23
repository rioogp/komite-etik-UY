import { TableCell } from "@mui/material";
// import Table from "../../components/table/Table";
import TableStyle from "../../../components/Table";
import DocumentsApplicantRow from "./DocumentsApplicantRow";
import { useDocuments } from "../useDocuments";
import useFilteredDocuments from "../../../hooks/useFilteredDocuments";

function DocumentsApplicantTable() {
  const { documents, isLoading } = useFilteredDocuments(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredDocuments = documents.filter(
    (document) => document.status === "Sedang Diproses"
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
            Reviewer
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }} align="center">
            Aksi
          </TableCell>
        </TableStyle.Header>
        <TableStyle.Body
          data={filteredDocuments}
          render={(document, index) => (
            <DocumentsApplicantRow
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

export default DocumentsApplicantTable;
