import { useContext, type FC } from 'react';
import { ProductInterface } from '../../server/dbTypes';
import { CartContext } from './CartContext';


export const CartProductComponent: FC<ProductInterface> = (props) => {
    const { imagen, nombre } = props;
    const { removeProductFromCart } = useContext(CartContext);
    return (
        <div className="flex justify-between items-center w-full bg-customCardColor border-b border-white p-2 text-white">
            <div className="bg-slate-500 rounded-full">
                <img src={imagen} alt="potion" />
            </div>
            <div className="">
                {nombre}
            </div>
            <button className="text-stone-400"
                onClick={() => removeProductFromCart(props)}
            >
                X
            </button>
        </div>
    )
}
