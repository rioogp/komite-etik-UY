import { Button, TableCell, ThemeProvider } from "@mui/material";
import TableStyle from "../../components/Table";
import { FiDownload } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { useDownloadDocument } from "./useDownloadDocument";
import { theme } from "../../utils/theme";
import ModalComponent from "../../components/ModalComponent";
import StepProgressBarDocument from "./StepProgressBarDocument";
import CreateUpdateFormDocuments from "./CreateUpdateFormDocuments";

function DocumentsDoneRow({ data, index }) {
  const { isPending, downloadDocument } = useDownloadDocument();

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
          fontSize: "1.2rem",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {data.status}
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

            {data.status !== "Layak" && data.status !== "Tidak Layak" && (
              <>
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
                    title="Perbaikan Pengajuan"
                    subtitle="Unggah file perbaikan yang ingin diajukan"
                  >
                    <CreateUpdateFormDocuments id={data._id} />
                  </ModalComponent.ModalWindow>
                </ModalComponent>
              </>
            )}
          </ThemeProvider>
        </div>
      </TableCell>
    </TableStyle.Row>
  );
}

export default DocumentsDoneRow;
