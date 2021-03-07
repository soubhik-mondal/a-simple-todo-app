import "./index.css";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import App from "./components/App";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
