import { TableCell } from "@mui/material";
import TableStyle from "../../../components/Table";
import { useDocuments } from "../useDocuments";
import ChairDocumentsRow from "./ChairDocumentsRow";

function ChairDocumentsTable() {
  const { isLoading, documents } = useDocuments();

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
            Download
          </TableCell>
          <TableCell
            sx={{ color: "gray", fontSize: "1.2rem" }}
            align="center"
          ></TableCell>
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
