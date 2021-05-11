import { Routes, Route } from "react-router-dom";
import * as useComponent from "../index";
import { PrivateRouter } from "./PrivateRouter";

export function RouteProvider() {
  return (
    <Routes>
      <Route path="/" element={<useComponent.LogIn />} />
      <Route path="/subscription" element={<useComponent.SignUp />} />
      <Route path="/address/createform" element={<useComponent.CreateForm />} />
      <Route path="/address/dashboard" element={<useComponent.DashBoard />} />
      <Route path="/address/treeview" element={<useComponent.TreeView />} />
      <Route
        path="/address/subordinatedetails"
        element={<useComponent.SubordinateDetails />}
      />
      <Route
        path="/address/userdetails"
        element={<useComponent.UserDetails />}
      />
      <Route path="/address/viewleads" element={<useComponent />} />
      <PrivateRouter path="/address" element={<useComponent.Home />} />
    </Routes>
  );
}
