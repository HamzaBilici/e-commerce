import { useState } from "react";
import "./App.css";
import { toast } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  const notify = () => toast("Wow so easy !");

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={notify}>Notify !</button>
    </>
  );
}

export default App;
