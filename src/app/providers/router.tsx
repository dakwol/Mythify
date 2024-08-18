// app/providers/router.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  const isAuthenticated = true;
  const userRole = "user";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute
              element={<HomePage />}
              isAuthenticated={isAuthenticated}
              userRole={userRole}
              allowedRoles={["user", "admin"]} // Доступно пользователям и администраторам
            />
          }
        />
        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
