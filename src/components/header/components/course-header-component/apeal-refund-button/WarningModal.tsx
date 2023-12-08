import { Modal, Typography } from "@mui/material";
import React from "react";

interface IProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const WarningModal: React.FC<IProps> = ({ isModalOpen, handleCloseModal }) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 350,
          height: 210,
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontFamily: "Inter, sans-serif",
            color: "#828282",
            fontWeight: 400,
            fontSize: "20px",
          }}
        >
          Справедливі скарги
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            fontFamily: "Inter, sans-serif",
            color: "#828282",
            fontWeight: 300,
            fontSize: "18px",
          }}
        >
          Ми серйозно ставимось до скарг, тому аби поскаржитись на даний
          навчальний матеріал, потрібно пройти не менше 25%, після чого вам
          точно буде, що розповісти)
        </Typography>
      </div>
    </Modal>
  );
};

export default WarningModal;
