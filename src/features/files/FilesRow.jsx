import { Button, TableCell } from "@mui/material";
import TableStyle from "../../components/table/Table";
import { FiDownload } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

function FilesRow({ data }) {
  return (
    <TableStyle.Row>
      <TableCell
        sx={{
          fontSize: "1rem",
          paddingY: "50px",
          paddingLeft: "35px",
        }}
      >
        {1}
      </TableCell>

      <TableCell sx={{ fontSize: "1.1rem" }}>{data.nama}</TableCell>

      <TableCell
        sx={{
          fontWeight: "bold",
          fontSize: "1.1rem",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          maxWidth: "400px",
        }}
      >
        {data.nama_penelitian}
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
        </div>
      </TableCell>
    </TableStyle.Row>
  );
}

export default FilesRow;
