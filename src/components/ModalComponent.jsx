import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { Modal, Box, IconButton } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Heading from "./Heading";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function ModalComponent({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ open, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
}

function OpenButton({ children }) {
  const { handleOpen } = useContext(ModalContext);

  return cloneElement(children, { onClick: handleOpen });
}

function ModalWindow({ children, title, subtitle }) {
  const { open, handleClose } = useContext(ModalContext);

  return createPortal(
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1000,
            height: 800,
            bgcolor: "background.paper",
            borderRadius: "15px",
            boxShadow: 24,
            px: 7,
            py: 3,
          }}
          className="flex flex-col gap-16"
        >
          <div className="flex flex-row justify-between items-baseline w-full">
            <Box className="flex flex-col justify-center items-start gap-5">
              <Heading type="custom" fontSize="text-5xl">
                {title}
              </Heading>
              <span className="text-xl text-slate-600">{subtitle}</span>
            </Box>
            <IconButton aria-label="close" onClick={handleClose}>
              <IoMdClose size={42} />
            </IconButton>
          </div>
          {children}
        </Box>
      </motion.div>
    </Modal>,
    document.body
  );
}

ModalComponent.OpenButton = OpenButton;
ModalComponent.ModalWindow = ModalWindow;

export default ModalComponent;
