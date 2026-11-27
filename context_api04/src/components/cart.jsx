
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {

    const { cart, totalPrice } = useContext(CartContext);

    return (
        <section>
            <h2>Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                    />
                ))
            )}

            <h3>
                Total: ₹{totalPrice.toLocaleString("en-IN")}
            </h3>
        </section>
    );
};

export default Cart;
