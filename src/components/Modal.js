import { useDispatch } from "react-redux";

export default function Modal({ children, title, modal }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(modal())}
      className="w-screen min-h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="min-w-[390px] w-3/4 sm:w-6/12 p-10 border rounded-md flex flex-col gap-10 items-center bg-white"
      >
        <div className="text-3xl font-bold">{title}</div>
        {children}
      </div>
    </div>
  );
}
