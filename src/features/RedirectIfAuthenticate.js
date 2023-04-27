import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticate({ children }) {
  const user = useSelector((state) => state.auth.auth);
  if (user) {
    return <Navigate to={"/user/" + user.id} />;
  }
  return children;
}
