import { Button, TableCell, ThemeProvider } from "@mui/material";
import { FiDownload } from "react-icons/fi";
import TableStyle from "../../../components/Table";
import { useDownloadDocument } from "../useDownloadDocument";
import ModalComponent from "../../../components/ModalComponent";
import { theme } from "../../../utils/theme";

function ChairDocumentsRow({ data }) {
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
        <Button
          variant="contained"
          sx={{
            width: "6.4rem",
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
          width: "200px",
        }}
        align="center"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Button
            variant="contained"
            sx={{
              width: "8.2rem",
              backgroundColor: "#006A74",
              marginLeft: "15px",
              paddingY: "10px",
              fontSize: 16,
              textTransform: "none",
              "&:hover": { backgroundColor: "#02575f" },
            }}
            onClick={() => downloadDocument(data.documents[0])}
            disabled={isPending}
          >
            Upload
          </Button>
        </div>
      </TableCell>
    </TableStyle.Row>
  );
}

export default ChairDocumentsRow;
