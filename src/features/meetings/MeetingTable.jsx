import { TableCell } from "@mui/material";
import TableStyle from "../../components/Table";
import MeetingRow from "./MeetingRow";
import { useMeetings } from "./useMeetings";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

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
  const { role } = useContext(AuthContext);
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
          {role === "ketua" && (
            <TableCell
              sx={{ color: "gray", fontSize: "1.2rem" }}
              align="center"
            >
              Aksi
            </TableCell>
          )}
        </TableStyle.Header>
        <TableStyle.Body
          data={meetings}
          render={(meeting, index) => (
            <MeetingRow meeting={meeting} index={index} key={meeting._id} />
          )}
        />
      </TableStyle>
    </>
  );
}

export default MeetingTable;
