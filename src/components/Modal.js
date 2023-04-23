import { useDispatch } from "react-redux";
import { setModal } from "../store/AuthSlice";

export default function Modal({ children, title }) {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(setModal())} className="w-screen h-screen bg-white bg-opacity-30 absolute top-0 left-0 flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="w-3/4 min-w-[390px] sm:w-2/6 p-10 border rounded-md flex flex-col gap-10 items-center bg-white">
      <div className="text-3xl font-bold">{title}</div>
        {children}
      </div>
    </div>
  );
}
