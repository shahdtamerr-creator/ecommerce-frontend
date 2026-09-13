import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: "placeholder-1", label: "Category 1" },
  { id: "placeholder-2", label: "Category 2" },
  { id: "placeholder-3", label: "Category 3" },
  { id: "placeholder-4", label: "Category 4" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-[var(--space-xl)]">
      <div className="max-w-6xl mx-auto px-4 py-[var(--space-lg)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">MyStore</h3>
          <p className="text-sm text-gray-400">
            Your one-stop shop for quality products at great prices, delivered
            fast and reliably.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-white transition">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white transition">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-3">Categories</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/shop?category=${cat.id}`}
                  className="hover:text-white transition"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>Email: support@mystore.com</li>
            <li>Phone: +20 100 000 0000</li>
            <li>Cairo, Egypt</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a
              href="/"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              Facebook
            </a>
            <a
              href="/"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href="/"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © 2026 Ecommerce Team Project. All rights reserved.
      </div>
    </footer>
  );
}
