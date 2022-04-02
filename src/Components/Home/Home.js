import { useContext, useState } from 'react';
import { ShirtContext } from '../../App';
import Cart from '../Cart/Cart';
import Shirt from '../Shirt/Shirt';
const Home = () => {
    const [shirts] = useContext(ShirtContext);
    const [cart, setCart] = useState([])

    const purchaseCart = (selectedItem) => {
        const exist = cart.find(item => item._id === selectedItem._id)
        if (exist) {
            alert('Do not allow duplicate items')
        }
        else {
            const newCart = [...cart, selectedItem]
            setCart(newCart);

        }
    }
    const removeCart = (getItem) => {
        const rest = cart.filter(item => item._id !== getItem._id)
        setCart(rest)
    }
    return (
        <div className='grid grid-cols-2 justify-items-center '>
            <div className='grid grid-cols-2 gap-5 py-5'>
                {shirts.map(shirt => <Shirt
                    shirt={shirt}
                    key={shirt._id}
                    purchaseCart={purchaseCart}
                ></Shirt>)}
            </div>
            <div>
                <p>Purchase Summary</p>
                <Cart
                    cart={cart}
                    removeCart={removeCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;