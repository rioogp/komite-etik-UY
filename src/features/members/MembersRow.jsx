import { Button, TableCell, ThemeProvider } from "@mui/material";
import TableStyle from "../../components/Table";
import { theme } from "../../utils/theme";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import ModalComponent from "../../components/ModalComponent";
import CreateUpdateFormMember from "./CreateUpdateFormMember";
import { useDeleteUser } from "../authentication/useDeleteUser";
import HandleDelete from "../../components/HandleDelete";

function MembersRow({ data, index }) {
  const { deleteUser, isPending } = useDeleteUser();

  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "0.9rem",
          paddingY: "50px",
          paddingLeft: "35px",
          width: "400px",
        }}
      >
        {index + 1}
      </TableCell>

      <TableCell
        sx={{ fontSize: "0.8rem", width: "900px", fontWeight: "bold" }}
      >
        {data.name}
      </TableCell>

      <TableCell
        sx={{
          fontSize: "0.8rem",

          width: "500px",
        }}
      >
        {data.role === "reviewer" ? "Reviewer" : "Ketua Komite"}
      </TableCell>

      <TableCell align="center">
        <div className="flex flex-col gap-4">
          <ModalComponent>
            <ModalComponent.OpenButton>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#006A74",
                  paddingY: "8px",
                  minWidth: "2.9rem",
                  "&:hover": { backgroundColor: "#004d54" },
                }}
              >
                <MdOutlineEdit size={22} />
              </Button>
            </ModalComponent.OpenButton>
            <ModalComponent.ModalWindow
              title="Update Anggota"
              subtitle="Update data anggota dibawah ini"
            >
              <CreateUpdateFormMember id={data._id} />
            </ModalComponent.ModalWindow>
          </ModalComponent>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#006A74",
              paddingX: 0,
              "&:hover": { backgroundColor: "#004d54" },
            }}
            disabled={isPending}
            onClick={() => HandleDelete(() => deleteUser(data._id))}
          >
            <FaRegTrashAlt size={22} />
          </Button>
        </div>
      </TableCell>
    </TableStyle.Row>
  );
}

export default MembersRow;
