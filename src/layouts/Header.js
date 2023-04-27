import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/AuthSlice";

export default function Header() {
  const user = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  return (
    <div className="w-full min-h-[75px] px-10 rounded-t-md flex items-center justify-between bg-black bg-opacity-80 text-white">
      <div className="font-bold text-3xl">{user.username}</div>
      <button onClick={() => dispatch(logout())} className="font-bold">
        Log out
      </button>
    </div>
  );
}
