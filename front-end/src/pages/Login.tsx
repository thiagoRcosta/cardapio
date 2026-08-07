import { useState } from "react";
import logo from "../assets/cardapio-logo.png";
import Input from "../components/Input";
import { Link } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div className="flex justify-center items-center h-screen p-8">
      <form
        className="flex flex-col justify-center items-center gap-2 w-full max-w-[350px] p-2 sm:p-0"
        onSubmit={handleSubmit}
      >
        <Link to="/">
          <img src={logo} className="mb-4" width={125} alt="" />
        </Link>
        <Input
          placeholder="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-amber-400 text-black w-full mt-2 p-2 rounded-md font-bold text-sm cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
