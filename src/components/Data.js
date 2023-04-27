import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkFetchData } from "../store/DataSlice";

export default function Data() {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(thunkFetchData());
    };
    fetchData();
  }, []);
  return (
    <div className="flex items-center justify-center">
      {data?.length === 0 ? (
        <div className="text-sm text-gray-400">No data</div>
      ) : (
        <div className="border rounded-lg">
          <table className="w-auto table-fixed text-center border-collapse">
            <thead className="border-b bg-gray-200">
              <tr>
                <th className="px-4 py-2">Weight (kg)</th>
                <th className="px-4 py-2">Height (cm)</th>
                <th className="px-4 py-2">Waistline (inches)</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el) => (
                <tr className="" key={el.id}>
                  <td className="px-4 py-2 min-h-[20px]">{el.weight}</td>
                  <td className="px-4 py-2 min-h-[20px]">{el.height}</td>
                  <td className="px-4 py-2 min-h-[20px]">{el.waistline}</td>
                  <td className="px-4 py-2 min-h-[20px]">{el.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
