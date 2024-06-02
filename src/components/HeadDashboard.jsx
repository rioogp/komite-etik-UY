import { Button, Divider, Menu, MenuItem, ThemeProvider } from "@mui/material";
import Heading from "./Heading";
import ModalComponent from "./ModalComponent";
import { theme } from "../utils/theme";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import SortBy from "./SortBy";

function HeadDashboard({
  title,
  subtitle,
  add,
  filters,
  modalTitle,
  modalSubtitle,
  buttonAddTitle,
  children,
}) {
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
                  {buttonAddTitle}
                </Button>
              </ModalComponent.OpenButton>
              <ModalComponent.ModalWindow
                title={modalTitle}
                subtitle={modalSubtitle}
              >
                {children}
              </ModalComponent.ModalWindow>
            </ModalComponent>
          </ThemeProvider>
        )}
      </div>
      <Divider />
      {filters && <SortBy />}
    </div>
  );
}

export default HeadDashboard;
