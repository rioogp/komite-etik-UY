import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

function SortBy() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterFromUrl = searchParams.get("filter") || "Terbaru";
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const [filterText, setFilterText] = useState(capitalize(filterFromUrl));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (filter) => {
    setFilterText(filter);
    handleClose();
    setSearchParams({ filter: filter.toLowerCase() });
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{
          borderColor: "#D0D5DD",
          color: "#161616",
          textTransform: "none",
          fontSize: "12px",
          borderRadius: "7px",
          fontWeight: "medium",
          display: "flex",
          gap: "4px",
          "&:hover": {
            borderColor: "#e3e5e8",
          },
        }}
        className="w-24 h-10"
      >
        <IoFilterSharp size={16} />
        {filterText}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          style: {
            width: "125px",
          },
        }}
      >
        <MenuItem
          onClick={() => handleMenuItemClick("Terlama")}
          sx={{ fontSize: "14px", fontWeight: "600" }}
        >
          Terlama
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("Terbaru")}
          sx={{ fontSize: "14px", fontWeight: "600" }}
        >
          Terbaru
        </MenuItem>
      </Menu>
    </>
  );
}

export default SortBy;
