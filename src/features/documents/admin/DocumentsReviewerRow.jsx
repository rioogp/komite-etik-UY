import { Button, TableCell, ThemeProvider } from "@mui/material";
import { FiDownload } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";

import TableStyle from "../../../components/Table";
import { theme } from "../../../utils/theme";
import ModalComponent from "../../../components/ModalComponent";
import DocumentDecision from "./DocumentDecision";
import { useDownloadDocument } from "../useDownloadDocument";

function DocumentsReviewerRow({ data }) {
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
        {1}
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
                variant="contained"
                sx={{
                  backgroundColor: "#006A74",
                  marginLeft: "15px",
                  paddingY: "10px",
                  "&:hover": { backgroundColor: "#02575f" },
                }}
              >
                <IoMdInformationCircleOutline
                  size={26}
                  className="text-white"
                />
              </Button>
            </ModalComponent.OpenButton>
            <ModalComponent.ModalWindow
              title="Status Pengajuan"
              subtitle="Status pengajuan proposal kamu dibawah ini"
            >
              <DocumentDecision reviewers={data.reviewers} id={data._id} />
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

export default DocumentsReviewerRow;
