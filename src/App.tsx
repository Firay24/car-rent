// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Auth, Dashboard, Home } from "@/layouts";
import ProtectedRoute from "./guard/protectedRoute";
import RedirectBasedOnRole from "./util/RedirectBasedOnRole";

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute role="admin">
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/*"
        element={
          <ProtectedRoute role="user">
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<RedirectBasedOnRole />} />
    </Routes>
  );
}

export default App;
