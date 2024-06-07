import { Button, TableCell } from "@mui/material";
import TableStyle from "../../components/Table";
import { FiDownload } from "react-icons/fi";

function LetterFormRow({ data }) {
  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "0.9rem",
          paddingY: "50px",
          paddingLeft: "35px",
          width: "150px",
        }}
      >
        {data.id}
      </TableCell>

      <TableCell sx={{ fontSize: "0.9rem", width: "full" }}>
        {data.name}
      </TableCell>

      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        <a href={data.url} download>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#006A74",
              marginLeft: "15px",
              paddingY: "10px",
              minWidth: "2.8rem",
              "&:hover": { backgroundColor: "#004a51" },
            }}
          >
            <FiDownload size={16} className="text-white" />
          </Button>
        </a>
      </TableCell>
    </TableStyle.Row>
  );
}

export default LetterFormRow;
