
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <nav className="navbar">
            <h2>MyStore</h2>
            <h3>Cart 🛒 ({cartCount})</h3>
        </nav>
    );
};

export default Navbar;
