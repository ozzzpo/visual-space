import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.tsx";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: "#202020",
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
);
