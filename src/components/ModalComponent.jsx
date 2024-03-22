import React, { useState } from "react";
import { Button, Modal, Box, IconButton, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Heading from "./Heading";

function ModalComponent() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
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
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              borderRadius: "15px",
              boxShadow: 24,
              px: 7,
              py: 3,
            }}
            className="flex justify-between items-baseline"
          >
            <Box className="flex flex-col justify-center items-start gap-5">
              <Heading type="custom" fontSize="text-5xl">
                Modal Title
              </Heading>
              <span className="text-xl text-slate-600">Modal Subtitle</span>
            </Box>
            <IconButton aria-label="close" onClick={handleClose}>
              <IoMdClose size={42} />
            </IconButton>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
}

export default ModalComponent;
