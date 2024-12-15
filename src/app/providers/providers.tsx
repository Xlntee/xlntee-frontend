import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import store, { persistor } from "../store/store";
import { AuthProvider } from "../context/auth";
import { ThemeModeProvider } from "../context/theme-mode";
import MuiProvider from "./muiProvider";

import "src/shared/i18n";

if (import.meta.env.MODE === "production") {
  disableReactDevTools();
}

function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ThemeModeProvider>
      <Provider store={store}>
        <AuthProvider>
          <PersistGate loading={null} persistor={persistor}>
            <MuiProvider>{children}</MuiProvider>
          </PersistGate>
        </AuthProvider>
      </Provider>
    </ThemeModeProvider>
  );
}

export default Providers;
