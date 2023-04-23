import { Outlet } from "react-router-dom";

export default function Container() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-hero-pattern">
      <Outlet />
    </div>
  );
}
