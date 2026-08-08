import { Link } from "react-router";
import logo from "../assets/cardapio-logo.png";

function Header() {
  return (
    <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between p-4 xl:py-2 xl:px-0">
      <img src={logo} alt="Logo" width={100} />
      <Link to="/login">
        <div className="bg-amber-400 p-2 w-[120px] cursor-pointer rounded-md text-center text-black font-bold">
          Entrar
        </div>
      </Link>
    </div>
  );
}

export default Header;
