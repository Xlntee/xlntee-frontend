import { AlertColor } from "@mui/material";
import { useReducer } from "react";

enum EnumActionType {
  SHOW = "SHOW",
  CLOSE = "CLOSE",
  SET_COLOR = "SET_COLOR",
  SET_MESSAGE = "SET_MESSAGE"
}

type ActionType = {
  type: EnumActionType;
  payload: string;
};

interface ActionState {
  show: boolean;
  message: string;
  color: string;
}

interface UseSnackbarAlertReturnType {
  alertVisible: boolean;
  alertMessage: string;
  alertColor: AlertColor;
  setMessageAlert: (message: string) => void;
  setColorAlert: (color: AlertColor) => void;
  showAlert: () => void;
  closeAlert: () => void;
}

const initialState: ActionState = {
  show: false,
  message: "",
  color: "error"
};

function reducer(state: ActionState, action: ActionType): ActionState {
  switch (action.type) {
    case "SHOW": {
      return {
        ...state,
        show: true
      };
    }
    case "CLOSE": {
      return {
        ...state,
        show: false
      };
    }
    case "SET_COLOR": {
      return {
        ...state,
        color: action.payload
      };
    }
    case "SET_MESSAGE": {
      return {
        ...state,
        message: action.payload
      };
    }
    default:
      return state;
  }
}

export const useSnackbarAlert = (): UseSnackbarAlertReturnType => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function showAlert(): void {
    dispatch({
      type: EnumActionType.SHOW,
      payload: ""
    });
  }

  function closeAlert(): void {
    dispatch({
      type: EnumActionType.CLOSE,
      payload: ""
    });
  }

  function setMessageAlert(message: string): void {
    dispatch({
      type: EnumActionType.SET_MESSAGE,
      payload: message
    });
  }

  function setColorAlert(color: AlertColor): void {
    dispatch({
      type: EnumActionType.SET_COLOR,
      payload: color
    });
  }

  return {
    alertVisible: state.show,
    alertMessage: state.message,
    alertColor: state.color as AlertColor,
    showAlert,
    closeAlert,
    setMessageAlert,
    setColorAlert
  };
};

export default useSnackbarAlert;
