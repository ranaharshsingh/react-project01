
import { products } from "./products";
import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
        <section>
            <h2>Available Products</h2>

            <div className="product-list">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
