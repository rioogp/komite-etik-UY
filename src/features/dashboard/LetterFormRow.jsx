import { Button, TableCell } from "@mui/material";
import TableStyle from "../../components/Table";
import { FiDownload } from "react-icons/fi";

function LetterFormRow({ data }) {
  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "1.2rem",
          paddingY: "50px",
          paddingLeft: "35px",
          width: "150px",
        }}
      >
        {data.id}
      </TableCell>

      <TableCell sx={{ fontSize: "1.2rem", width: "full" }}>
        {data.name}
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
            width: "3.8rem",
            backgroundColor: "#006A74",
            marginLeft: "15px",
            paddingY: "10px",
            "&:hover": { backgroundColor: "#004a51" },
          }}
        >
          <FiDownload size={26} className="text-white" />
        </Button>
      </TableCell>
    </TableStyle.Row>
  );
}

export default LetterFormRow;
