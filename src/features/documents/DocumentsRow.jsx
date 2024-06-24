import { Button, TableCell, ThemeProvider } from "@mui/material";
import TableStyle from "../../components/Table";
import { FiDownload } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { theme } from "../../utils/theme";
import ModalComponent from "../../components/ModalComponent";
import StepProgressBarDocument from "./StepProgressBarDocument";
import { steps } from "../../utils/constants";

function DocumentsRow({ data, index }) {
  const stepData = steps.find((step) => step.title === data.status);

  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "0.85rem",
          paddingY: "50px",
          paddingLeft: "35px",
          width: "fit",
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
          maxWidth: "fit",
        }}
      >
        {data.researchName}
      </TableCell>

      <TableCell
        sx={{
          fontWeight: "bold",
          fontSize: "0.8rem",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          maxWidth: "fit",
        }}
      >
        <div className="flex items-center gap-2">
          {stepData ? stepData.icon : null}
          <p className="text-[0.8rem]">{stepData ? stepData.title : null}</p>
        </div>
      </TableCell>

      <TableCell>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#547268",
            marginLeft: "10px",
            paddingY: "10px",
            minWidth: "2.9rem",
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
        <ThemeProvider theme={theme}>
          <ModalComponent>
            <ModalComponent.OpenButton>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#006A74",
                  paddingY: "10px",
                  marginLeft: "5px",
                  paddingX: 0,
                  minWidth: "2.8rem",
                  height: "2.5rem",
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
        </ThemeProvider>
      </TableCell>
    </TableStyle.Row>
  );
}

export default DocumentsRow;
