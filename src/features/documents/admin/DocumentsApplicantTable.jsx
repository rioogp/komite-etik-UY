import { CircularProgress, TableCell } from "@mui/material";
import TableStyle from "../../../components/Table";
import DocumentsApplicantRow from "./DocumentsApplicantRow";
import useFilteredDocuments from "../../../hooks/useFilteredDocuments";

function DocumentsApplicantTable() {
  const { documents, isLoading } = useFilteredDocuments(false);

  if (isLoading) {
    return (
      <div className="w-full h-full text-center">
        <CircularProgress />
      </div>
    );
  }

  const filteredDocuments = documents.filter(
    (document) => document.status === "Sedang Diproses"
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
            Reviewer
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }} align="center">
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
