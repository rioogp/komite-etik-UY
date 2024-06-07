import { CircularProgress, TableCell } from "@mui/material";
import TableStyle from "../../components/Table";
import { useUsers } from "../authentication/useUsers";
import MembersRow from "./MembersRow";

function MembersTable() {
  const { isLoading, users } = useUsers();

  if (isLoading) {
    return <CircularProgress />;
  }

  const members = users.filter((user) => {
    return user.role === "reviewer" || user.role === "ketua";
  });

  return (
    <>
      <TableStyle>
        <TableStyle.Header>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Nomor
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>
            Nama Anggota
          </TableCell>
          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }}>Role</TableCell>

          <TableCell sx={{ color: "gray", fontSize: "0.9rem" }} align="center">
            Aksi
          </TableCell>
        </TableStyle.Header>
        <TableStyle.Body
          data={members}
          render={(member, index) => (
            <MembersRow data={member} index={index} key={member._id} />
          )}
        />
      </TableStyle>
    </>
  );
}

export default MembersTable;
