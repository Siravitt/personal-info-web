import { Navigate } from "react-router-dom";

const authUser = false;
export default function ProtectedRoute({ children }) {
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
}
