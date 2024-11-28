import "normalize.css";
import "react-quill/dist/quill.snow.css";
import "src/styles/main.scss";
import ReactDOM from "react-dom/client";
import ReactGa from "react-ga4";
import App from "./App.tsx";

ReactGa.initialize("G-ZB1X5QVSP7");
ReactGa.send({
  hitType: "pageview",
  page: window.location.pathname
});

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
