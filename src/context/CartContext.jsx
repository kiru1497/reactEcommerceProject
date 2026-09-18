import { createContext, useMemo, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((previousCart) => {
      const existingItem = previousCart.find((item) => item.id === product.id);

      if (existingItem) {
        return previousCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(productId) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== productId),
    );
  }

  function increaseQuantity(productId) {
    setCart((previousCart) =>
      previousCart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      }),
    );
  }

  function decreaseQuantity(productId) {
    setCart((previousCart) =>
      previousCart
        .map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  }

  const totalQuantity = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const contextValue = useMemo(() => {
    return {
      cart,
      totalQuantity,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
    };
  }, [cart, totalQuantity]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
