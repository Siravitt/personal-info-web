import { useState } from "react";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { closeLoading, openLoading } from "../store/LoadingSlice";
import { thunkLogin } from "../store/AuthSlice";
import validateLogin from "../validators/login-validate";

const initialInput = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading.loading);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = validateLogin(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        dispatch(openLoading());
        await dispatch(thunkLogin(input));
        toast.success("Login success");
        setInput(initialInput);
      }
    } catch (err) {
      toast.error("Invalid username or password");
      console.log(err.response?.data);
    } finally {
      dispatch(closeLoading());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full px-8">
      <div className="flex flex-col gap-2">
        <Input
          id="username"
          label="Username"
          error={error?.username}
          onChange={handleChangeInput}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          id="password"
          label="Password"
          type="password"
          error={error?.password}
          onChange={handleChangeInput}
        />
      </div>
      <button className="mt-8 py-1 flex items-center justify-center bg-black text-white font-bold rounded-md hover:bg-gray-700 duration-150">
        {loading ? (
          <div
            className="inline-block mx-8 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
}
