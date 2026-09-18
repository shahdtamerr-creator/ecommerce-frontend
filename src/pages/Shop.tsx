import {products} from"../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Shop(){
    const { addToCart } = useCart();


    const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="grid grid-cols-4 gap-5 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          isInWishlist={wishlist.some(
            (item) => item.id === product.id
          )}
        />
      ))}
    </div>
  );
}
    //  const handleAddToCart = (product: Product) => {
    //     console.log("Added:", product);
    // };

    // const handleToggleWishlist = (product: Product) => {
    //     console.log("Wishlist:", product);
    // };
    
export default Shop;