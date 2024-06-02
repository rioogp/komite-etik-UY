import TableStyle from "../../components/Table";
import { TableCell } from "@mui/material";
import LetterFormRow from "./LetterFormRow";

const dummyData = [
  {
    id: 1,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian yang Melibatkan Manusia",
  },
  {
    id: 2,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian yang Melibatkan Sel dan Jaringan",
  },
  {
    id: 3,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian Menggunakan Bahan/Senyawa Kimia",
  },
  {
    id: 4,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian yang Melibatkan Tanaman",
  },
  {
    id: 5,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian yang Melibatkan Hewan Coba",
  },
  {
    id: 6,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian dengan Mikroba, Virus, Parasit, Jamur",
  },
  {
    id: 7,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian Menggunakan Material",
  },
  {
    id: 8,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian yang Melibatkan Survei, Epidemiologi atau Sosial Budaya",
  },
];

function LetterFormTable() {
  return (
    <>
      <TableStyle>
        <TableStyle.Header>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Nomor
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }}>
            Nama Form Surat
          </TableCell>

          <TableCell sx={{ color: "gray", fontSize: "1.2rem" }} align="center">
            Aksi
          </TableCell>
        </TableStyle.Header>
        <TableStyle.Body
          data={dummyData}
          render={(data) => <LetterFormRow data={data} key={data.id} />}
        />
      </TableStyle>
    </>
  );
}

export default LetterFormTable;
