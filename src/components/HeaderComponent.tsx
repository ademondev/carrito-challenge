import { useContext } from "react";
import { CartContext } from "./CartContext";

export const HeaderComponent = () => {
  const { toggleShowCarritoState, cartArray, gems } = useContext(CartContext);

  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img src="./gem.png" alt="gem"/>
        <span>{gems} Gemas</span>
      </div>
      <button 
        className="text-white hover:underline"
        onClick={toggleShowCarritoState} // Use the function directly without an arrow function
      >
        Ver Carrito ({cartArray.length})
      </button>
    </div>
  );
};
