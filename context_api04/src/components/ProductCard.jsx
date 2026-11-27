
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <h4>₹{product.price.toLocaleString("en-IN")}</h4>

            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
