import { Button, TableCell } from "@mui/material";
import { FiDownload } from "react-icons/fi";

import TableStyle from "../../../components/Table";

function DocumentsChairRow({ data }) {
  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "1rem",
          paddingY: "50px",
          paddingLeft: "35px",
          width: "150px",
        }}
      >
        {1}
      </TableCell>

      <TableCell sx={{ fontSize: "1.1rem", width: "200px" }}>
        {data.nama}
      </TableCell>

      <TableCell
        sx={{
          fontWeight: "bold",
          fontSize: "1.1rem",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          width: "400px",
        }}
      >
        {data.nama_penelitian}
      </TableCell>

      <TableCell
        sx={{
          fontSize: "1.1rem",
          width: "100px",
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
          >
            <FiDownload size={25} className="text-white" />
          </Button>
        </div>
      </TableCell>
    </TableStyle.Row>
  );
}

export default DocumentsChairRow;
