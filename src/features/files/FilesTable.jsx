import { TableCell } from "@mui/material";
// import Table from "../../components/table/Table";
import FilesRow from "./FilesRow";
import TableStyle from "../../components/table/Table";

const tempData = [
  {
    id: 1,
    nama: "John Doe",
    nama_penelitian: "Pengembangan Teknologi Pendidikan",
  },
  {
    id: 2,
    nama: "Jane Smith",
    nama_penelitian: "Analisis Data Medis",
  },
];

function FilesTable() {
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
          <TableCell
            sx={{ color: "gray", fontSize: "1.2rem" }}
            align="center"
          ></TableCell>
        </TableStyle.Header>
        <TableStyle.Body
          data={tempData}
          render={(data) => <FilesRow data={data} key={data.id} />}
        />
      </TableStyle>
    </>
  );
}

export default FilesTable;
