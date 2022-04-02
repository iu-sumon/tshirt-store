import React from 'react';
const Shirt = ({ shirt, purchaseCart }) => {
    const { name, picture, price } = shirt;
    return (
        <div className='border-2 rounded-lg'>
            <img className='w-40 h-40' src={picture} alt="" />
            <div>
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <button onClick={() => purchaseCart(shirt)} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add To Cart</button>
            </div>
        </div>
    );
};

export default Shirt;