export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4 w-full px-8">
      <label className="font-bold">Username</label>
      <input className="py-1 px-3 border rounded-md" />
      <label className="font-bold">Password</label>
      <input type="password" className="py-1 px-3 border rounded-md" />
      <button className="mt-8 py-1 bg-black text-white font-bold rounded-md hover:bg-gray-700 duration-150">
        Login
      </button>
    </form>
  );
}
