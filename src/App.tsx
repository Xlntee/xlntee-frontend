import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-template/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import ComponentTestPage from "./pages/component-test/ComponentTestPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="test" element={<ComponentTestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
