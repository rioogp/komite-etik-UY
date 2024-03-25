import { Button, Divider, Menu, MenuItem, ThemeProvider } from "@mui/material";
import Heading from "./Heading";
import ModalComponent from "./ModalComponent";
import CreateFormFiles from "../features/files/CreateFormFiles";
import { theme } from "../utils/theme";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

function HeadDashboard({ title, subtitle, add, filters }) {
  return (
    <div className="flex flex-col gap-12 mb-12">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <Heading type="custom" fontSize="text-4xl">
            {title}
          </Heading>
          <span className="text-xl text-slate-500">{subtitle}</span>
        </div>
        {add && (
          <ThemeProvider theme={theme}>
            <ModalComponent>
              <ModalComponent.OpenButton>
                <Button
                  sx={{
                    marginTop: "20px",
                    textTransform: "none",
                    fontSize: "20px",
                  }}
                  variant="contained"
                  color="success"
                  className="w-38 h-14 flex gap-5"
                >
                  <LuPlus size={22} />
                  Ajukan
                </Button>
              </ModalComponent.OpenButton>
              <ModalComponent.ModalWindow>
                <CreateFormFiles />
              </ModalComponent.ModalWindow>
            </ModalComponent>
          </ThemeProvider>
        )}
      </div>
      <Divider />
      {filters && <FiltersButton />}
    </div>
  );
}

function FiltersButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-end">
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{
          borderColor: "#D0D5DD",
          color: "#161616",
          textTransform: "none",
          fontSize: "16px",
          borderRadius: "7px",
          fontWeight: "medium",
          display: "flex",
          gap: "6px",
          "&:hover": {
            borderColor: "#e3e5e8",
          },
        }}
        className="w-32 h-12"
      >
        <IoFilterSharp size={20} />
        Filters
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
          onClick={handleClose}
          sx={{ fontSize: "18px", fontWeight: "600" }}
        >
          Terlama
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ fontSize: "18px", fontWeight: "600" }}
        >
          Terbaru
        </MenuItem>
      </Menu>
    </div>
  );
}

export default HeadDashboard;
