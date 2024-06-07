import TableStyle from "../../components/Table";
import { TableCell } from "@mui/material";
import LetterFormRow from "./LetterFormRow";

const dummyData = [
  {
    id: 1,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian yang Melibatkan Manusia",
    url: "/forms/Manusia.pdf",
  },
  {
    id: 2,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian yang Melibatkan Sel dan Jaringan",
    url: "/forms/Sel dan Jaringan.pdf",
  },
  {
    id: 3,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian Menggunakan Bahan/Senyawa Kimia",
    url: "/forms/Bahan - Senyawa Kimia.pdf",
  },
  {
    id: 4,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian yang Melibatkan Tanaman",
    url: "/forms/Tanaman.pdf",
  },
  {
    id: 5,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian yang Melibatkan Hewan Coba",
    url: "/forms/Hewan Coba.pdf",
  },
  {
    id: 6,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian dengan Mikroba, Virus, Parasit, Jamur",
    url: "/forms/Mikroba Virus Parasit Jamur.pdf",
  },
  {
    id: 7,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian Menggunakan Material",
    url: "/forms/Material.pdf",
  },
  {
    id: 8,
    name: "Form Pengajuan Kelayakan Komite Etik Penelitian yang Melibatkan Survei, Epidemiologi atau Sosial Budaya",
    url: "/forms/Survey Epidemiologi Sosial Budaya.pdf",
  },
];

function LetterFormTable() {
  return (
    <>
      <TableStyle>
        <TableStyle.Header>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Nomor
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Nama Form Surat
          </TableCell>

          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }} align="center">
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
