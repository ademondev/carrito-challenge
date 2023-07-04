import { useContext, useEffect, useState } from "react";
import { ProductInterface } from "../../server/dbTypes";
import { ProductComponent } from "./ProductComponent";
import { CartContext } from "./CartContext";


/**
 * Checks whether the ProductComponent "Agregar" button is available or not based on
 * the product, cartArray and gems.
 * 
 * The "Agregar" button should not be available under the following circumstances:
 *    - The user has no gems left => gems === 0
 *    - The current amount of gems is less than the price of the current product => gems < product.precio
 *    - The current product has the same category as any of the products
 *        in the cart => cartArray.some(cartProduct => cartProduct.categoria === product.categoria)
 *    - The current product is already in the cart => cartArray.some(cartProduct => cartProduct.id === product.id)
 * @param product 
 * @param cartArray 
 * @param gems
 */
function isButtonAvailable(product: ProductInterface, cartArray: ProductInterface[], gems: number): boolean {
  // The user has no gems left
  if (gems === 0 || gems < 0) return false;
  // The current amount of gems is less than the price of the current product => gems < product.precio
  if (gems < product.precio) return false;
  // The current product has the same category as any of the products
  if (cartArray.some(cartProduct => cartProduct.categoria === product.categoria)) return false;
  // The current product is already in the cart
  if (cartArray.some(cartProduct => cartProduct.id === product.id)) return false;
  return true;
}

export const ListadoProductosComponent = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { gems, cartArray } = useContext(CartContext);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/productos");
        const data = await response.json() as ProductInterface[];
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }
    getProducts();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <ul className="grid grid-cols-2 gap-4">
        {products.map((product) => 
          (
            <ProductComponent 
              {...product} 
              key={product.id} 
              buttonAvailable={isButtonAvailable(product, cartArray, gems)}
            />
          ))
        }
      </ul>
    </div>
  )
};
