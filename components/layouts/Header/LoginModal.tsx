import React from "react";
import { Box, Modal } from "@mui/material";
import KakaoLogin from "../../common/LoginButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  height: 124,
  bgcolor: "background.paper",
  boxShadow: 12,
  outline: "none",
};

const LoginModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <span className="cursor-pointer" onClick={handleOpen}>
        로그인
      </span>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} className="rounded-xl">
          <div className=" flex flex-col items-center justify-around">
            <div className="pt-[20px] text-xl font-bold">
              <span>{`로그인을 해주세요:)`}</span>
            </div>
            <KakaoLogin close={handleClose} />
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default LoginModal;
