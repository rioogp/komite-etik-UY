import { Button, TableCell, ThemeProvider } from "@mui/material";
import TableStyle from "../../components/Table";
import { FiDownload } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { theme } from "../../utils/theme";
import ModalComponent from "../../components/ModalComponent";
import StepProgressBarDocument from "./StepProgressBarDocument";
import CreateUpdateFormDocuments from "./CreateUpdateFormDocuments";
import { steps } from "../../utils/constants";

function DocumentsDoneRow({ data, index }) {
  const stepData = steps.find((step) => step.title === data.status);

  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "0.9rem",
          paddingY: "50px",
          paddingLeft: "35px",
        }}
      >
        {index + 1}
      </TableCell>

      <TableCell sx={{ fontSize: "0.9rem" }}>{data.nameUser}</TableCell>

      <TableCell
        sx={{
          fontWeight: "bold",
          fontSize: "0.8rem",
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
          fontSize: "0.9rem",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          maxWidth: "400px",
        }}
      >
        <div className="flex flex-row items-center gap-2">
          {stepData ? stepData.icon : null}
          <p className="text-[0.8rem]">{stepData ? stepData.title : null}</p>
        </div>
      </TableCell>
      <TableCell
        sx={{
          fontSize: "0.9rem",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#547268",
            minWidth: "2.9rem",
            paddingY: "10px",
            marginLeft: "10px",
            "&:hover": { backgroundColor: "#455952" },
          }}
          onClick={() => {
            window.location.href = data.documents;
          }}
        >
          <FiDownload size={16} className="text-white" />
        </Button>
      </TableCell>

      <TableCell
        sx={{
          fontSize: "0.9rem",
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
                    paddingY: "8px",
                    minWidth: "2.9rem",
                    "&:hover": { backgroundColor: "#004d54" },
                  }}
                >
                  <IoIosInformationCircleOutline size={22} />
                </Button>
              </ModalComponent.OpenButton>
              <ModalComponent.ModalWindow
                title="Detil Kemajuan Penelitian"
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
                        paddingY: "8px",
                        minWidth: "2.9rem",
                        "&:hover": { backgroundColor: "#004d54" },
                      }}
                    >
                      <MdOutlineEdit size={22} />
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
