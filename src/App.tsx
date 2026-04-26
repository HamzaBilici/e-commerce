import "./App.css";
import { toast } from "react-toastify";

import { useAppSelector, useAppDispatch } from "./store/hooks";
import { increment, decrement } from "./store/slices/counterSlice";
import { getDummy } from "./store/actions/getDummy";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const notify = () => toast("Wow so easy !");

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={notify}>Notify !</button>
      <h1>Sayaç: {JSON.stringify(count)}</h1>
      <button onClick={() => dispatch(increment())}>Artır</button>
      <br></br>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <br></br>
      <button onClick={() => dispatch(getDummy())}>reset</button>
    </>
  );
}

export default App;
