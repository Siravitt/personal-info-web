import { useState } from "react";
import Input from "../components/Input";
import validateInformation from "../validators/information-validate";
import { useDispatch, useSelector } from "react-redux";
import { closeLoading, openLoading } from "../store/LoadingSlice";
import { toast } from "react-hot-toast";
import { addData } from "../store/DataSlice";
import * as informationApi from "../apis/information-api";

const initialInput = {
  weight: "",
  height: "",
  waistline: "",
  date: "",
};

export default function InformationForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = validateInformation(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        dispatch(openLoading());
        await informationApi.addData(input);
        dispatch(addData(input));
        dispatch(addData(data));
        toast.success("Add information success");
        setInput(initialInput);
      }
    } catch (err) {
      toast.error("Something wrong");
      console.log(err);
    } finally {
      dispatch(closeLoading());
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-3/6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Input
          id="weight"
          label="Weight"
          onChange={handleChangeInput}
          error={error?.weight}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          id="height"
          label="Height"
          onChange={handleChangeInput}
          error={error?.height}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          id="waistline"
          label="Waistline"
          onChange={handleChangeInput}
          error={error?.waistline}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          id="date"
          label="Date"
          type="date"
          onChange={handleChangeInput}
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-8 py-1 bg-black w-3/6 text-white font-bold rounded-lg">
          Add
        </button>
      </div>
    </form>
  );
}
