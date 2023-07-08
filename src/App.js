import Navbar from "./components/Navbar";
import Model from "./components/Model";
import CartContainer from "./components/CartContainer";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.model);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <>
      {isOpen && <Model />}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
