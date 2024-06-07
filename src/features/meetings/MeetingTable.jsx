import { TableCell } from "@mui/material";
import TableStyle from "../../components/Table";
import MeetingRow from "./MeetingRow";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function MeetingTable({ meetings }) {
  const { role } = useContext(AuthContext);
  return (
    <>
      <TableStyle>
        <TableStyle.Header>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Nomor
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Email
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Nama Pertemuan
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Tanggal Pertemuan
          </TableCell>
          {role === "ketua" && (
            <TableCell
              sx={{ color: "gray", fontSize: "0.9rem" }}
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
