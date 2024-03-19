import { TableCell } from "@mui/material";
import TableStyle from "../../components/table/Table";

function FilesRow({ data }) {
  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "1rem",
        }}
      >
        {1}
      </TableCell>

      <TableCell sx={{ fontSize: "1.1rem" }}>{data.nama}</TableCell>

      <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
        {data.nama_penelitian}
      </TableCell>

      <TableCell sx={{ fontSize: "1.1rem" }}>Download</TableCell>

      <TableCell sx={{ fontSize: "1.1rem" }}>Aplot</TableCell>
    </TableStyle.Row>
  );
}

export default FilesRow;
