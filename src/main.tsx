// src/main.tsx 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react"; // 追加
import "@aws-amplify/ui-react/styles.css"; // 追加

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
   <Authenticator>  // 追加
     <App />
   </Authenticator> // 追加
 </React.StrictMode>
); 
