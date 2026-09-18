import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p>
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-5">

          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg"
            >

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              <h2 className="font-bold mt-3">
                {product.title}
              </h2>

              <p>
                ${product.price}
              </p>

              <button
                onClick={() =>
                  removeFromWishlist(product.id)
                }
                className="border px-4 py-2 mt-3"
              >
                Remove from Wishlist
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Wishlist;