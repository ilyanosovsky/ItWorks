import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./auth/AuthProvider";
import { UserProvider } from "./context/UserProvider";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import "./i18n/index";
import './i18n';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <ToastProvider>
            <AppRoutes />
            <Toaster />
          </ToastProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
