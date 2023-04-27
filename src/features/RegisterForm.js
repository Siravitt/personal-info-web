import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openLoading, closeLoading } from "../store/LoadingSlice";
import Input from "../components/Input";
import validateRegister from "../validators/register-validate";
import { register } from "../apis/auth-api";
import toast from "react-hot-toast";
import { setModal } from "../store/AuthSlice";

const initialInput = {
  username: "",
  firstName: "",
  lastName: "",
  phone: "",
  password: "",
  confirmPassword: "",
  citizenId: "",
};

export default function RegisterForm() {
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
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        dispatch(openLoading());
        await register(input);
        toast.success("Register success");
        dispatch(setModal());
        setInput(initialInput);
      }
    } catch (err) {
      toast.error("Something wrong");
      console.log(err.response?.data);
    } finally {
      dispatch(closeLoading());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-4 flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <div className="grow flex flex-col gap-2">
          <Input
            onChange={handleChangeInput}
            id="firstName"
            label="First name :"
            error={error?.firstName}
          />
        </div>
        <div className="grow flex flex-col gap-2">
          <Input
            onChange={handleChangeInput}
            id="lastName"
            label="Last name :"
            error={error?.lastName}
          />
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="grow flex flex-col gap-2">
          <Input
            onChange={handleChangeInput}
            id="username"
            label="Username :"
            error={error?.username}
          />
        </div>
        <div className="grow flex flex-col gap-2">
          <Input onChange={handleChangeInput} id="phone" label="Phone :" />
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="grow flex flex-col gap-2">
          <Input
            onChange={handleChangeInput}
            id="password"
            label="Password :"
            type="password"
            error={error?.password}
          />
        </div>
        <div className="grow flex flex-col gap-2">
          <Input
            onChange={handleChangeInput}
            id="confirmPassword"
            label="Confirm password :"
            type="password"
            error={error?.confirmPassword}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-5/12">
        <Input
          onChange={handleChangeInput}
          id="citizenId"
          label="Citizen ID :"
          error={error?.citizenId}
        />
      </div>
      <div className="mt-8 flex items-center justify-center">
        <button type="submit" className="px-6 py-1 flex items-center bg-black text-white font-bold rounded-md hover:bg-gray-700 duration-150">
          {loading ? (
            <div
              className="inline-block mx-8 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          ) : (
            "Register"
          )}
        </button>
      </div>
    </form>
  );
}
