import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import { Section } from "../components/Section/Section";
import heroImage from "../assets/hero.png";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CATEGORIES = [
  { id: "placeholder-1", label: "Category 1" },
  { id: "placeholder-2", label: "Category 2" },
  { id: "placeholder-3", label: "Category 3" },
  { id: "placeholder-4", label: "Category 4" },
];

const MOCK_PRODUCTS: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Sample Product ${i + 1}`,
  price: Number((10 + i * 5.5).toFixed(2)),
  image: "https://via.placeholder.com/300",
}));

export default function Home() {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);

  const handleAddToCart = (product: Product) => {
    console.log("Add to cart (mock):", product);
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id],
    );
  };

  const featured = products.slice(0, 4);
  const bestSellers = products.slice(4, 8);
  const newArrivals = products.slice(8, 12);

  const renderGrid = (list: Product[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {list.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          isInWishlist={wishlistIds.includes(p.id)}
        />
      ))}
    </div>
  );

  return (
    <div>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 sm:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Discover Products You'll Love
          </h1>
          <p className="text-gray-200 text-base sm:text-lg mb-8">
            Great quality, unbeatable prices, delivered to your door.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition px-6 py-3 rounded-[var(--radius-md)] font-medium"
          >
            Shop Now →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <Section title="Shop by Category">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="flex items-center justify-center text-center bg-[var(--color-secondary)] hover:bg-gray-200 transition rounded-[var(--radius-lg)] py-8 px-4 font-medium text-[var(--color-text-main)]"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured Products */}
      <Section
        title="Featured Products"
        subtitle="Hand-picked items just for you"
      >
        {renderGrid(featured)}
      </Section>

      {/* Best Sellers */}
      <Section
        title="Best Sellers"
        subtitle="Our customers' favorites"
        className="bg-gray-50"
      >
        {renderGrid(bestSellers)}
      </Section>

      {/* Promotional Banner */}
      <Section>
        <div className="bg-[var(--color-primary)] text-white rounded-[var(--radius-lg)] px-8 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Up to 30% Off Selected Items
          </h2>
          <p className="text-blue-100 mb-6">
            Limited time offer — don't miss out.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-gray-100 transition px-6 py-3 rounded-[var(--radius-md)] font-medium"
          >
            Browse Deals
          </Link>
        </div>
      </Section>

      {/* New Arrivals */}
      <Section title="New Arrivals" subtitle="Fresh products just added">
        {renderGrid(newArrivals)}
      </Section>

      {/* Newsletter */}
      <section className="bg-gray-900 py-[var(--space-xl)] w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Stay in the Loop</h2>
            <p className="text-gray-400 mb-6">
              Subscribe to get updates on new arrivals and exclusive offers.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 rounded-[var(--radius-md)] px-4 py-2 text-[var(--color-text-main)] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition px-6 py-2 rounded-[var(--radius-md)] font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
