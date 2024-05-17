import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage/></Layout>} />
      <Route path="/dashboard" element={<Layout><span>Dashboard</span></Layout>} />
      <Route path="/view-users" element={<Layout><span>View Users</span></Layout>} />
      <Route path="/create-user" element={<Layout><span>Create Users</span></Layout>} />
      <Route path="/admin-profile" element={<Layout><span>Admin Profile</span></Layout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
