export default function Input({ type = "text", id, label, onChange, error }) {
  return (
    <>
      <label htmlFor={id} className="font-bold">{label}</label>
      <input onChange={onChange} type={type} id={id} className="px-2 py-1 border rounded-md text-sm" name={id} />
      {error && <div className="text-sm text-red-400">{error}</div>}
    </>
  );
}
