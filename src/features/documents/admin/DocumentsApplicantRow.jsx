import { Button, TableCell, ThemeProvider } from "@mui/material";
import { FiDownload } from "react-icons/fi";
import TableStyle from "../../../components/Table";
import { useDownloadDocument } from "../useDownloadDocument";
import { theme } from "../../../utils/theme";
import ModalComponent from "../../../components/ModalComponent";
import EditReviewerFormDocuments from "./EditReviewerFormDocuments";

function DocumentsApplicantRow({ data, index }) {
  const { isPending, downloadDocument } = useDownloadDocument();

  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "1rem",
          paddingY: "50px",
          paddingLeft: "35px",
          width: "200px",
        }}
      >
        {index + 1}
      </TableCell>

      <TableCell sx={{ fontSize: "1.1rem", width: "300px" }}>
        {data.nameUser}
      </TableCell>

      <TableCell
        sx={{
          fontWeight: "bold",
          fontSize: "1.1rem",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          width: "500px",
        }}
      >
        {data.researchName}
      </TableCell>

      <TableCell
        sx={{
          fontSize: "1.1rem",
          textAlign: "center",
        }}
      >
        <ThemeProvider theme={theme}>
          <ModalComponent>
            <ModalComponent.OpenButton>
              <Button
                variant="text"
                sx={{
                  backgroundColor: "#D0D5DD",
                  width: "115px",
                  height: "70px",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "1.3",
                  color: "black",
                  borderRadius: "12px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#a4a9b1" },
                }}
              >
                Pilih Reviewer
              </Button>
            </ModalComponent.OpenButton>
            <ModalComponent.ModalWindow
              title="Pilih Reviewer"
              subtitle="Berikan berkas kepada Reviewer untuk di review"
            >
              <EditReviewerFormDocuments id={data._id} />
            </ModalComponent.ModalWindow>
          </ModalComponent>
        </ThemeProvider>
      </TableCell>

      <TableCell
        sx={{
          fontSize: "1.1rem",
          width: "200px",
        }}
        align="center"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#006A74",
              marginLeft: "15px",
              paddingY: "10px",
              "&:hover": { backgroundColor: "#02575f" },
            }}
            onClick={() => downloadDocument(data.documents[0])}
            disabled={isPending}
          >
            <FiDownload size={25} className="text-white" />
          </Button>
        </div>
      </TableCell>
    </TableStyle.Row>
  );
}

export default DocumentsApplicantRow;
