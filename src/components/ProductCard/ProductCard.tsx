import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  isInWishlist?: boolean;
}

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
}: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col hover:shadow-lg transition">
      <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mb-3"
        />
        <h3 className="text-sm text-gray-700 line-clamp-2 mb-2">
          {product.title}
        </h3>
        <p className="text-blue-600 font-bold mb-3">${product.price}</p>
      </Link>

      <div className="flex gap-2 mt-auto">
        {onAddToCart && (
          <Button
            variant="primary"
            fullWidth
            className="text-sm"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
        )}
        {onToggleWishlist && (
          <Button
            variant={isInWishlist ? "danger" : "secondary"}
            onClick={() => onToggleWishlist(product)}
          >
            {isInWishlist ? "💔" : "❤️"}
          </Button>
        )}
      </div>
    </div>
  );
}
