import { Button, TableCell, ThemeProvider } from "@mui/material";
import TableStyle from "../../components/Table";
import { MdOutlineEdit } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import { formatDate } from "../../utils/helpers";
import { useDeleteMeeting } from "./useDeleteMeeting";
import { theme } from "../../utils/theme";
import ModalComponent from "../../components/ModalComponent";
import CreateAndUpdateFormMeeting from "./CreateAndUpdateFormMeetings";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function MeetingRow({ meeting, index }) {
  const { isPending, deleteMeeting } = useDeleteMeeting();
  const { role } = useContext(AuthContext);

  console.log(meeting);
  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "1.3rem",
          paddingY: "50px",
          paddingLeft: "35px",
        }}
      >
        {index + 1}
      </TableCell>

      <TableCell sx={{ fontSize: "1.3rem" }}>
        <span className="font-medium">{meeting.emailUser}</span>
      </TableCell>

      <TableCell
        sx={{
          fontSize: "1.3rem",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          maxWidth: "400px",
        }}
      >
        <span className="font-medium">{meeting.emailUser}</span>{" "}
      </TableCell>

      <TableCell
        sx={{
          fontSize: "1.3rem",
          paddingLeft: "25px",
        }}
      >
        <span className="bg-[#ECFDF5] text-[#064E3B] p-2 rounded-lg font-semibold">
          {formatDate(meeting.meetingSchedule)}
        </span>
      </TableCell>

      {role === "ketua" && (
        <TableCell
          sx={{
            fontSize: "1.3rem",
          }}
          align="center"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <ThemeProvider theme={theme}>
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
                    <MdOutlineEdit size={38} />
                  </Button>
                </ModalComponent.OpenButton>
                <ModalComponent.ModalWindow
                  title="Ubah Jadwal Pertemuan"
                  subtitle="Ubah jadwal pertemuan sesuai dengan kebutuhan"
                >
                  <CreateAndUpdateFormMeeting id={meeting._id} />
                </ModalComponent.ModalWindow>
              </ModalComponent>
            </ThemeProvider>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#006A74",
                paddingX: 0,
                "&:hover": { backgroundColor: "#004d54" },
              }}
              disabled={isPending}
              onClick={() => deleteMeeting(meeting._id)}
            >
              <LuTrash2 size={38} />
            </Button>
          </div>
        </TableCell>
      )}
    </TableStyle.Row>
  );
}

export default MeetingRow;
