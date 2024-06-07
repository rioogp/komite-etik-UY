import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function TableStyle({ children }) {
  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table">
        {children}
      </Table>
    </TableContainer>
  );
}

const Header = ({ children }) => {
  return (
    <TableHead>
      <TableRow>{children}</TableRow>
    </TableHead>
  );
};

const Row = ({ children }) => {
  return <TableRow>{children}</TableRow>;
};

const Body = ({ data, render }) => {
  return (
    <TableBody>
      {data.length ? (
        data.map(render)
      ) : (
        <TableRow>
          <TableCell colSpan={5} align="center">
            <Typography
              variant="body"
              color="InfoText"
              sx={{ fontSize: "14px" }}
            >
              Tidak ada data penelitian
            </Typography>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

TableStyle.Header = Header;
TableStyle.Body = Body;
TableStyle.Row = Row;

export default TableStyle;
