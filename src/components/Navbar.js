import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  // ? useSelector is hook that is use to read value from the store state
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h2>Redux Toolkit</h2>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
