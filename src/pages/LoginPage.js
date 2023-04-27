import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../features/LoginForm";
import RegisterForm from "../features/RegisterForm";
import Modal from "../components/Modal";
import { setModal } from "../store/AuthSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.auth.registerModal);
  return (
    <div className="w-3/4 min-w-[390px] sm:w-2/6 p-10 border rounded-md flex flex-col gap-10 items-center bg-white bg-opacity-80">
      <div className="text-3xl font-bold">Login</div>
      <LoginForm />
      <div>
        <span className="text-sm">No account? </span>{" "}
        <button
          onClick={() => dispatch(setModal())}
          className="text-sm text-blue-500 font-bold hover:text-blue-300 duration-150"
        >
          Sign up
        </button>
      </div>
      {modal ? (
        <Modal modal={setModal} title="Register">
          <RegisterForm />
        </Modal>
      ) : null}
    </div>
  );
}
