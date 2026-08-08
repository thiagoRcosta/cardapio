type ButtonType = {
  title: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ title, variant = "default", ...props }: ButtonType) {
  function buttonVariant() {
    if (variant === "default") {
      return "bg-amber-400 border-1 border-amber-400 text-black w-full p-2 rounded-md font-bold text-sm cursor-pointer";
    } else if (variant === "outline") {
      return "bg-white border-1 border-white text-black w-full p-2 rounded-md font-bold text-sm cursor-pointer";
    }
  }

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
}

export default Button;
