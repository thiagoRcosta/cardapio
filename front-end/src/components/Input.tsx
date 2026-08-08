function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-gray-200 p-2 text-sm text-[#32343E] outline-none rounded-md"
    />
  );
}

export default Input;
