import "./App.css";
import { toast } from "react-toastify";

import { useAppSelector, useAppDispatch } from "./store/hooks";
import { increment, decrement } from "./store/slices/counterSlice";
import { getDummy } from "./store/actions/getDummy";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  const notify = () => toast("Wow so easy !");
  const count = useAppSelector((state) => state.counter.value);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={notify}>Notify !</button>
      <h1>Sayaç: {JSON.stringify(count)}</h1>
    </>
  );
}

function About() {
    const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return <>      <h1>Sayaç: {JSON.stringify(count)}</h1>
      <button onClick={() => dispatch(increment())}>Artır</button>
      <br></br>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <br></br>
      <button onClick={() => dispatch(getDummy())}>reset</button></>;
}

function Users() {
  return <h2>Users</h2>;
}
