import { useState } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: "placeholder-1", label: "Category 1" },
  { id: "placeholder-2", label: "Category 2" },
  { id: "placeholder-3", label: "Category 3" },
  { id: "placeholder-4", label: "Category 4" },
];

const MOCK_CART_COUNT = 0;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-[var(--color-text-main)]"
        >
          MyStore
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-[var(--color-primary)] transition"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-600 hover:text-[var(--color-primary)] transition"
          >
            Shop
          </Link>

          {/* Categories dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen((o) => !o)}
              className="text-gray-600 hover:text-[var(--color-primary)] transition"
            >
              Categories
            </button>
            {categoriesOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-[var(--radius-md)] py-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/shop?category=${cat.id}`}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    onClick={() => setCategoriesOpen(false)}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-48 rounded-[var(--radius-md)] border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />

          <Link
            to="/wishlist"
            className="text-gray-600 hover:text-[var(--color-primary)] transition"
          >
            Wishlist
          </Link>

          <Link
            to="/cart"
            className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-[var(--radius-md)] hover:bg-[var(--color-primary-hover)] transition"
          >
            Cart ({MOCK_CART_COUNT})
          </Link>

          <Link
            to="/login"
            className="text-gray-600 hover:text-[var(--color-primary)] transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-[var(--radius-md)] border border-gray-300 px-3 py-2 text-sm"
          />
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="text-gray-600"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setMobileOpen(false)}
            className="text-gray-600"
          >
            Shop
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              onClick={() => setMobileOpen(false)}
              className="text-gray-600 pl-3"
            >
              {cat.label}
            </Link>
          ))}
          <Link
            to="/wishlist"
            onClick={() => setMobileOpen(false)}
            className="text-gray-600"
          >
            Wishlist
          </Link>
          <Link
            to="/cart"
            onClick={() => setMobileOpen(false)}
            className="text-gray-600"
          >
            Cart ({MOCK_CART_COUNT})
          </Link>
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="text-gray-600"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
