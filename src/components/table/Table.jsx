// function Table({ children }) {
//   return (
//     <div className="overflow-x-scroll md:w-full md:min-w-full xl:overflow-hidden">
//       <div role="table" className="text-lg">
//         {children}
//       </div>
//     </div>
//   );
// }

// const Header = ({ children }) => {
//   return (
//     <header
//       role="row"
//       className={`grid grid-flow-col auto-cols-fr gap-5 xl:gap-6 py-4 border-b border-gray-200 font-semibold text-gray-600 items-center justify-center transition-none uppercase w-full`}
//     >
//       {children}
//     </header>
//   );
// };

// const Row = ({ children }) => {
//   return (
//     <>
//       <div
//         role="row"
//         className={`grid grid-flow-col auto-cols-fr gap-30 xl:gap-10 py-5 items-center justify-center w-full`}
//       >
//         {children}
//       </div>
//       <div className="border-b border-gray-200"></div>
//     </>
//   );
// };

// const Body = ({ data, render }) => {
//   return (
//     <>
//       {data.length ? (
//         <section className="my-5">{data.map(render)}</section>
//       ) : (
//         <p className="text-center text-base font-medium text-gray-700 mt-3">
//           No data to show at the moment
//         </p>
//       )}
//     </>
//   );
// };

// Table.Header = Header;
// Table.Body = Body;
// Table.Row = Row;

// export default Table;

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
            <Typography variant="body1" color="textSecondary">
              No data to show at the moment
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
