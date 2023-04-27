import { useDispatch, useSelector } from "react-redux";
import Data from "../components/Data";
import Header from "../layouts/Header";
import Modal from "../components/Modal";
import { setModal } from "../store/DataSlice";
import InformationForm from "../features/InformationForm";

export default function HomePage() {
  const modal = useSelector((state) => state.data.modal);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div>
        <div className="min-w-[390px] min-h-[300px] p-10 border rounded-b-md relative flex flex-col gap-10 items-center bg-white bg-opacity-80">
          <div className="absolute top-5 right-5">
            <button
              onClick={() => dispatch(setModal())}
              className="w-[40px] h-[40px] text-sm text-white font-bold bg-green-600 flex items-center justify-center rounded-full hover:bg-green-400 duration-150"
            >
              Add
            </button>
          </div>
          <div className="text-3xl font-bold">Information</div>
          <Data />
        </div>
        {modal ? (
          <Modal modal={setModal} title="Add information">
            <InformationForm />
          </Modal>
        ) : null}
      </div>
    </div>
  );
}
