function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="max-w-[350px] bg-gray-200 p-2 text-sm text-[#32343E] outline-none rounded-md"
    />
  );
}

export default Input;
