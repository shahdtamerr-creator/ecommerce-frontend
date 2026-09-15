import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">
                Shopping Cart
            </h1>

            {cart.length === 0 ? (
                <p className="mt-4 text-gray-600">
                    Your cart is empty.
                </p>
            ) : (
                <div className="grid grid-cols-4 gap-5 p-6">
                    {cart.map((product) => (
                        <div
                            key={product.id}
                            className="flex items-center gap-4 border p-4 rounded-lg"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-24 h-24 object-contain"
                            />

                            <div className="flex-1">
                                <h2 className="font-semibold">
                                    {product.title}
                                </h2>

                                <p className="text-blue-600 font-bold">
                                    ${product.price}
                                </p>
                            </div>

                            <button
                                onClick={() => removeFromCart(product.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;