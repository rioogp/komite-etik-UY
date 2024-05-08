import { TableCell } from "@mui/material";
import TableStyle from "../../components/table/Table";
import MeetingRow from "./MeetingRow";
import { useMeetings } from "./useMeetings";

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

function MeetingTable({ meetings }) {
  return (
    <>
      <TableStyle>
        <TableStyle.Header>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Nomor
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Email
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Nama Pertemuan
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Tanggal Pertemuan
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }} align="center">
            Aksi
          </TableCell>
        </TableStyle.Header>
        <TableStyle.Body
          data={meetings}
          render={(meeting) => (
            <MeetingRow meeting={meeting} key={meeting._id} />
          )}
        />
      </TableStyle>
    </>
  );
}

export default MeetingTable;
