import Input from "./components/Input";

function App() {
  return (
    <div className="flex gap-2 flex-col">
      <Input placeholder="E-mail" type="text" />
      <Input placeholder="Senha" type="password" />
    </div>
  );
}

export default App;
