import App from './App';
import { CartProvider } from './components/CartContext';
import type { FC } from 'react';

/**
 *  Small abstraction to wrap the whole app with the CartContext
 */
export const AppWrapper: FC = () => {
    return (
        <CartProvider>
            <App />
        </CartProvider>
    )
};
