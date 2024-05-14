import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { FC } from "react";
import { authApiSlice, useLoginMutation } from "./api/authApiSlice";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "src/app/store/store";
import { setCredentials } from "pages/login/store/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Stack, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { FacebookOutlined } from "@mui/icons-material";

const ButtonStyles = {
  height: "56px",
  padding: "0 15px",
  color: "#070707",
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "20px",
  border: "1px solid #070707",
  textTransform: "none",
  justifyContent: "flex-start",
  "&:hover": {
    border: "1px solid #070707",
    backgroundColor: "rgba(7, 7, 7, 0.05)",
  },
};

const TextFieldStyles = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "20px",
  textTransform: "none",
  justifyContent: "flex-start",
  "&:hover": {
    backgroundColor: "rgba(7, 7, 7, 0.05)",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: "1px solid #070707",
    },
  },
  "& input::placeholder": {
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    color: "#828282",
  },
};

const SubmitBtnStyles = {
  color: "#fff",
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "25px",
  textTransform: "none",
  height: "56px",
};

const TinyBtnStyles = {
  p: 0,
  textTransform: "none",
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: "15px",
  borderRadius: "0px",
  borderBottom: "1px solid #082AC9",
  "&:hover": {
    backgroundColor: "transparent",
  },
};

interface IFormData {
  email: string;
  password: string;
}

const deviceId = "string";

const LoginForm: FC = () => {
  const { register, handleSubmit } = useForm<IFormData>();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const { state } = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await login({ ...data, deviceId }).unwrap();

      dispatch(setCredentials(res));

      if (state?.from) {
        navigate(state.from);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <ApiProvider api={authApiSlice}>
      <form onSubmit={onSubmit}>
        <Stack direction="column" gap="20px" padding="20px 0">
          <Button startIcon={<GoogleIcon style={{ fontSize: 37 }} />} variant="outlined" sx={ButtonStyles}>
            Увійти через Google
          </Button>
          <Button startIcon={<FacebookOutlined style={{ fontSize: 37 }} />} variant="outlined" sx={ButtonStyles}>
            Увійти через Facebook
          </Button>
          <TextField sx={TextFieldStyles} placeholder="Електронна пошта" {...register("email")} autoFocus />
          <TextField sx={TextFieldStyles} placeholder="Пароль" type="password" {...register("password")} />
          <Button sx={SubmitBtnStyles} variant="contained" type="submit" disabled={isLoginLoading}>
            Увійти
          </Button>
          <Stack direction="column">
            <Stack direction="row" alignItems="center" gap="3px" m="0 auto">
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15px" }}>
                Забули пароль?
              </Typography>
              <Button sx={TinyBtnStyles}>Змінити пароль</Button>
            </Stack>
            <Stack direction="row" alignItems="center" gap="3px" m="0 auto">
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15px" }}>
                Ще не зареєстровані?
              </Typography>
              <Button sx={TinyBtnStyles}>Зареєструватись</Button>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </ApiProvider>
  );
};

export default LoginForm;
