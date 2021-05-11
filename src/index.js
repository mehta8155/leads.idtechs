import { StrictMode, React } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./LoginAndSignup/auth-context";

export { UserDetails } from "./Address/Components/UserDetails";
export { CreateForm } from "./Address//Components/CreateForm";
export { DashBoard } from "./Address/Components/DashBoard";
export { TreeView } from "./Address/Components/TreeView";
export { RouteProvider } from "./Routes/RouteProvider";
export { LogIn } from "./LoginAndSignup/Login";
export { SignUp } from "./LoginAndSignup/SignUp";
export { Home } from "./Address/Address";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
