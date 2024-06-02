import { Button, TableCell, ThemeProvider } from "@mui/material";
import TableStyle from "../../components/Table";
import { theme } from "../../utils/theme";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import ModalComponent from "../../components/ModalComponent";
import CreateUpdateFormMember from "./CreateUpdateFormMember";
import { useDeleteUser } from "../authentication/useDeleteUser";

function MembersRow({ data, index }) {
  const { deleteUser, isPending } = useDeleteUser();

  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "1.3rem",
          paddingY: "50px",
          paddingLeft: "35px",
          width: "400px",
        }}
      >
        {index + 1}
      </TableCell>

      <TableCell
        sx={{ fontSize: "1.2rem", width: "900px", fontWeight: "bold" }}
      >
        {data.name}
      </TableCell>

      <TableCell
        sx={{
          fontSize: "1.2rem",

          width: "300px",
        }}
      >
        {data.role === "reviewer" ? "Reviewer" : "Ketua Komite"}
      </TableCell>

      <TableCell
        sx={{
          fontSize: "1.1rem",
          width: "40px",
        }}
        align="center"
      >
        <ThemeProvider theme={theme}>
          <div className="flex flex-col gap-4">
            <ModalComponent>
              <ModalComponent.OpenButton>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#006A74",
                    paddingX: 0,
                    "&:hover": { backgroundColor: "#004d54" },
                  }}
                >
                  <MdOutlineEdit size={32} />
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
              onClick={() => deleteUser(data._id)}
            >
              <FaRegTrashAlt size={28} />
            </Button>
          </div>
        </ThemeProvider>
      </TableCell>
    </TableStyle.Row>
  );
}

export default MembersRow;
