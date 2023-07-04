import { useContext } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";
import { CartContext } from "./components/CartContext";


function App() {
  const { showCarritoState } = useContext(CartContext);
  
  return (
      <div
        className="min-h-full bg-fixed"
        style={{ backgroundImage: "url(background.webp)" }}
      >
        <HeaderComponent />
        <div className="flex justify-center min-h-full">
          <div className="max-w-lg w-full py-16">
            {showCarritoState ? <CarritoComponent /> : <ListadoProductosComponent />}
          </div>
        </div>
      </div>
  );
}

export default App;
