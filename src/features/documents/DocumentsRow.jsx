import { Button, TableCell, ThemeProvider } from "@mui/material";
import TableStyle from "../../components/Table";
import { FiDownload } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDownloadDocument } from "./useDownloadDocument";
import { theme } from "../../utils/theme";
import ModalComponent from "../../components/ModalComponent";
import StepProgressBarDocument from "./StepProgressBarDocument";
import { steps } from "../../utils/constants";

function DocumentsRow({ data, index }) {
  const { isPending, downloadDocument } = useDownloadDocument();
  const stepData = steps.find((step) => step.title === data.status);

  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "1rem",
          paddingY: "50px",
          paddingLeft: "35px",
        }}
      >
        {index + 1}
      </TableCell>

      <TableCell sx={{ fontSize: "1.1rem" }}>{data.nameUser}</TableCell>

      <TableCell
        sx={{
          fontWeight: "bold",
          fontSize: "1.1rem",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          maxWidth: "400px",
        }}
      >
        {data.researchName}
      </TableCell>

      <TableCell
        sx={{
          fontWeight: "bold",
          fontSize: "1.1rem",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          maxWidth: "400px",
        }}
      >
        <div className="flex items-center gap-2">
          {stepData ? stepData.icon : null}
          <p className="text-[1.1rem]">{stepData ? stepData.title : null}</p>
        </div>
      </TableCell>

      <TableCell
        sx={{
          fontSize: "1.1rem",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#547268",
            marginLeft: "15px",
            paddingY: "10px",
            "&:hover": { backgroundColor: "#455952" },
          }}
          onClick={() => downloadDocument(data.documents[0])}
          disabled={isPending}
        >
          <FiDownload size={25} className="text-white" />
        </Button>
      </TableCell>

      <TableCell
        sx={{
          fontSize: "1.1rem",
        }}
        align="center"
      >
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
                <IoIosInformationCircleOutline size={38} />
              </Button>
            </ModalComponent.OpenButton>
            <ModalComponent.ModalWindow
              title="Detail Proposal"
              subtitle="Detail kemajuan proposal tersedia untuk ditinjau di bawah ini"
            >
              <StepProgressBarDocument
                id={data._id}
                createdAt={data.createdAt}
              />
            </ModalComponent.ModalWindow>
          </ModalComponent>
        </ThemeProvider>
      </TableCell>
    </TableStyle.Row>
  );
}

export default DocumentsRow;
