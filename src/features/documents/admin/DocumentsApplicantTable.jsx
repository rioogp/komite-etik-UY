import { TableCell } from "@mui/material";
// import Table from "../../components/table/Table";
import TableStyle from "../../../components/Table";
import DocumentsApplicantRow from "./DocumentsApplicantRow";

const tempData = [
  {
    id: 1,
    nama: "John Doe",
    status: "Layak",
    nama_penelitian:
      "Tinjauan Terhadap Kode Etik Organisasi: Tantangan dan Peluang di Era Digital",
  },
  {
    id: 2,
    nama: "Jane Smith",
    status: "",
    nama_penelitian: "Analisis Data Medis",
  },
];

function DocumentsApplicantTable() {
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
          data={tempData}
          render={(data) => <DocumentsApplicantRow data={data} key={data.id} />}
        />
      </TableStyle>
    </>
  );
}

export default DocumentsApplicantTable;
