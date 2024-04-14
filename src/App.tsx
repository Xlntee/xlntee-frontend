import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/themes";
import AppRouter from "components/routing/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
