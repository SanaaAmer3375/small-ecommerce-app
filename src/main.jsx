import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import "./index.css";
import ThemeRoot from "./theme/ThemeRoot";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeRoot />
    </Provider>
  </BrowserRouter>
);
