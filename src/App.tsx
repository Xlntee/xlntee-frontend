import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import ComponentTestPage from "./pages/component-test/ComponentTestPage";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/themes";
import Landing from "pages/landing/Landing";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Landing />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="registration" element={<RegistrationPage />} />
              <Route path="test" element={<ComponentTestPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
