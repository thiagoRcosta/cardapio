import { useState } from "react";
import logo from "../assets/cardapio-logo.png";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [postalCode, setPostalCode] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ name, email, password, confirmPassword, postalCode });
  }

  return (
    <div className="flex justify-center items-center h-screen p-8">
      <form
        className="flex flex-col justify-center items-center gap-2 w-full max-w-[350px] p-2 sm:p-0"
        onSubmit={handleSubmit}
      >
        <Link to="/">
          <img src={logo} className="mb-4" width={150} alt="" />
        </Link>
        <Input
          placeholder="Nome Completo"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirmar sua Senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <Button title="Criar conta" />
        <Link to="/login" className="w-full">
          <Button
            title="Já tenho uma conta"
            variant="outline"
            onClick={() => {}}
          />
        </Link>
      </form>
    </div>
  );
}

export default Register;
