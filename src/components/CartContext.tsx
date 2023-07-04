import { createContext, useState } from "react";
import type { ProductInterface } from "../../server/dbTypes";
import type { FC, ReactNode } from "react";

interface CartContextInterface {
    showCarritoState: boolean;
    toggleShowCarritoState: () => void;
    cartArray: ProductInterface[];
    setCartArray: (cartArray: ProductInterface[]) => void;
    addProductToCart: (product: ProductInterface) => void;
    removeProductFromCart: (product: ProductInterface) => void;
    gems: number;
    setGems: (gems: number) => void;
    resetStore: () => void;
}

export const CartContext = createContext<CartContextInterface>({
    showCarritoState: false,
    toggleShowCarritoState: () => {},
    cartArray: [],
    setCartArray: () => {},
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    gems: 0,
    setGems: () => {},
    resetStore: () => {},
});

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [showCarritoState, setShowCarritoState] = useState(false);
    const [cartArray, setCartArray] = useState<ProductInterface[]>([]);
    const [gems, setGems] = useState(3);


    // Context functions
    // - cartArray state functions
    function addProductToCart(product: ProductInterface) {
        setCartArray((prevCartArray) => [...prevCartArray, product]);
        setGems((prevGems) => prevGems - product.precio);
    };

    function removeProductFromCart(product: ProductInterface) {
        setCartArray((prevCartArray) =>
            prevCartArray.filter((item) => item.id !== product.id)
        );
        setGems((prevGems) => prevGems + product.precio);
    };

    // - showCarrito state functions
    function toggleShowCarritoState() {
        setShowCarritoState((prevState) => !prevState);
    };

    // - resetStore state function
    function resetStore() {
        setCartArray([]);
        setGems(3);
    }

    return (
        <CartContext.Provider
            value={{
                showCarritoState,
                toggleShowCarritoState,
                cartArray,
                setCartArray,
                addProductToCart,
                removeProductFromCart,
                gems,
                setGems,
                resetStore
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

