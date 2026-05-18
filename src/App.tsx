import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/hooks";

import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import ProtectedRoute from "./components/protectedRoute";
import CreateOrder from "./pages/CreateOrder";
import Orders from "./pages/Orders";

import { verifyToken } from "./store/actions/clientActions";
import { fetchCategories } from "./store/actions/productActions"; 

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.client.user);

useEffect(() => {
  dispatch(fetchCategories());

  const token = localStorage.getItem("token");

  if (token && !user?.verified) {
    dispatch(verifyToken());
  }
}, [dispatch, user?.verified]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="grow">
          <Switch>
            <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
              <Product />
            </Route>
            <Route exact path="/shop/:gender/:categoryName/:categoryId">
              <Shop />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/cart">
              <ShoppingCart />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <ProtectedRoute exact path="/create-order" component={CreateOrder} />
<ProtectedRoute exact path="/orders" component={Orders} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;