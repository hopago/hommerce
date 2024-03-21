import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter as Router } from "react-router-dom";

import { RecoilRoot } from "recoil";

import "./scss/index.scss";

import { ClerkProvider } from "@clerk/clerk-react";

import { Toaster } from "sonner";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing AUTH-KEY...");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RecoilRoot>
        <Router>
          <App />
          <Toaster richColors expand={true} />
        </Router>
      </RecoilRoot>
    </ClerkProvider>
  </React.StrictMode>
);
