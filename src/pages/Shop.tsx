import {products} from"../data/products";
import { useState } from "react";
import type{ Product } from "../types/Product";
import ProductCard from "../components/ProductCard/ProductCard";
import { useCart } from "../context/CartContext";

function Shop(){
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const { addToCart } = useCart();


    const handleToggleWishlist = (product: Product) => {
        setWishlist((prevWishlist) => {
            const exists = prevWishlist.some(
                (item) => item.id === product.id
            );

            if (exists) {
                return prevWishlist.filter(
                    (item) => item.id !== product.id
                );
            }

            return [...prevWishlist, product];
        });
    };
    //  const handleAddToCart = (product: Product) => {
    //     console.log("Added:", product);
    // };

    // const handleToggleWishlist = (product: Product) => {
    //     console.log("Wishlist:", product);
    // };
    return(
        <div className="grid grid-cols-4 gap-5 p-6">
            {products.map((product)=>(
            <ProductCard key={product.id} 
            product={product}
            onAddToCart={addToCart }
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={wishlist.some(
            (item) => item.id === product.id )}
            />
    ))}
        </div>
    );
}
export default Shop;