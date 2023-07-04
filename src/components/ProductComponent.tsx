import { useContext, type FC } from 'react';
import type { ProductInterface } from '../../server/dbTypes';
import { CartContext } from './CartContext';

interface ProductComponentProps extends ProductInterface {
    buttonAvailable: boolean;
}

export const ProductComponent: FC<ProductComponentProps> = (props) => {
    const { addProductToCart } = useContext(CartContext);
    const { descripcion, imagen, nombre, precio, buttonAvailable } = props;

    return (
        <div className='bg-customCardColor rounded-xl p-6 pt-4 max-w-sm
            transition-all duration-100 border-customCardColor border-2 
            hover:border-violet-700 
            '
        >
            <div className="flex justify-end">
                <div className="flex items-center justify-center w-25 px-3 py-1 rounded-full text-xs font-bold text-white bg-customPriceCardColor">
                    <span>{precio} Gema{precio > 1 ? 's' : ''}</span>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img className='h-20 mb-5' src={imagen} alt="product" />
            </div>
            <div className="">
                <h4 className='text-white font-bold'>{nombre}</h4>
                <p className='text-customCardTextColor font-medium text-sm'>{descripcion}</p>
            </div>
            <div className="flex justify-center items-center mt-4">
                <AgregarButton 
                    buttonDisabled={!buttonAvailable}
                    onButtonClick={() => addProductToCart({...props})}
                />
            </div>
        </div>
    );
}

interface AgregarButtonProps {
    buttonDisabled: boolean;
    buttonText?: string;
    onButtonClick: () => void;
}

export const AgregarButton: FC<AgregarButtonProps> = ({ buttonDisabled, buttonText, onButtonClick }) => {
    return (
        <button
            className={`rounded-xl w-full text-white text-sm py-1 font-medium transition-all duration-100
             ${!buttonDisabled ? 
                'bg-violet-700 hover:scale-105' 
                : 
                'bg-stone-500'}
            `}
            onClick={onButtonClick}
            disabled={buttonDisabled}
        >
            {buttonText ? buttonText : 'Agregar'}
        </button>
    );
}

