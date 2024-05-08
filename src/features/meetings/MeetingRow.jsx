import { Button, TableCell, ThemeProvider } from "@mui/material";
import TableStyle from "../../components/table/Table";
import { MdOutlineEdit } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import { formatDate } from "../../utils/helpers";
import { useDeleteMeeting } from "./useDeleteMeeting";
import { theme } from "../../utils/theme";
import ModalComponent from "../../components/ModalComponent";
import CreateAndUpdateFormMeeting from "./CreateAndUpdateFormMeetings";

function MeetingRow({ meeting, index }) {
  const { isPending, deleteMeeting } = useDeleteMeeting();

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

      <TableCell sx={{ fontSize: "1.3rem" }}>{meeting.emailUser}</TableCell>

      <TableCell
        sx={{
          fontSize: "1.3rem",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          maxWidth: "400px",
        }}
      >
        {meeting.nameMeeting}
      </TableCell>

      <TableCell
        sx={{
          fontSize: "1.3rem",
          paddingLeft: "25px",
        }}
      >
        {formatDate(meeting.meetingSchedule)}
      </TableCell>

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
    </TableStyle.Row>
  );
}

export default MeetingRow;
