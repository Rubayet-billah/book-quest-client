import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
