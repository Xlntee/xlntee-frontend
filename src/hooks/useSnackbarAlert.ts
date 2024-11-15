import { AlertColor } from "@mui/material";
import { useReducer } from "react";

const SnackbarActions = {
  show: "SHOW",
  close: "CLOSE",
  setColor: "SET_COLOR",
  setMessage: "SET_MESSAGE"
} as const;

type SnackbarActionKey = keyof typeof SnackbarActions;
type SnackbarActionsType = (typeof SnackbarActions)[SnackbarActionKey];

type ActionType = {
  type: SnackbarActionsType;
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
      type: SnackbarActions.show,
      payload: ""
    });
  }

  function closeAlert(): void {
    dispatch({
      type: SnackbarActions.close,
      payload: ""
    });
  }

  function setMessageAlert(message: string): void {
    dispatch({
      type: SnackbarActions.setMessage,
      payload: message
    });
  }

  function setColorAlert(color: AlertColor): void {
    dispatch({
      type: SnackbarActions.setColor,
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
