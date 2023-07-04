import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { CartProductComponent } from "./CartProductComponent";
import { AgregarButton } from "./ProductComponent";
import { ProductInterface } from "../../server/dbTypes";

export const CarritoComponent = () => {
  const { cartArray, toggleShowCarritoState, resetStore } = useContext(CartContext);
  const [showCompraMessage, setShowCompraMessage] = useState(false);
  const buttonDisabled = cartArray.length === 0;

  function comprar(cartProducts: ProductInterface[]) {
    const itemIds = cartProducts.map((cartProduct) => cartProduct.id);

    fetch("http://localhost:3001/compras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemIds }),
    })
      .then((response) => {
        // Handle emptying cartArray, and resetting gems
        resetStore();
      })
      .catch((error) => {
        console.log('Ocurrió un error');
      });
  }

  return (
    <div>
      <div className="flex justify-start w-16 mb-5">
        <AgregarButton
          buttonDisabled={false}
          onButtonClick={() => toggleShowCarritoState()}
          buttonText="Volver"
        />
      </div>
      {cartArray.map(cartItem => (
        <CartProductComponent
          {...cartItem}
          key={cartItem.id}
        />
      ))}
      <span className="text-white">
        {showCompraMessage && '¡Compra realizada!'}
      </span>
      <div className="mt-5">
        <AgregarButton
          buttonText='Comprar'
          buttonDisabled={buttonDisabled}
          onButtonClick={async () => {
            await comprar(cartArray);
            setShowCompraMessage(true);
          }}
        />
      </div>
    </div>
  );
};
