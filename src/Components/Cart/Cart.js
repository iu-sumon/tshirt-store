import React from 'react';
const Cart = ({ cart, removeCart }) => {
    let command;
    if (cart.length > 4) {
        command = <div>
            <p>Thanks For More Buying!!</p>
            <p>Patti owala!!</p>
        </div>
    }
    else if (cart.length === 3 || cart.length === 2) {
        command = <div>
            <p>Thanks for buying our products!!!</p>
            <p>Boro lokhs!!!!</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <div>
            <p>Please add more products!!</p>
        </div>
    }
    else if (cart.length === 0) {
        command = <div>
            <p>Dhur Mia Kenen na keno !!!</p>
        </div>
    }
    return (

        <div>
            <div className='bg-purple-500 text-white font-mono font-bold shadow-2xl rounded-2xl px-3 py-3'>
                {command}
            </div>
            {cart.length === 2 || <p>vai arror kinen!!</p> }
            {cart.length !== 4 ? <p>Kinte Thakun pore taka diyen</p> : <button>Review Order</button>}
            {cart.length === 3 && <p>Amareo Eid shopping koira den..</p>}

            {
                cart.map(p =>

                    <div className='flex justify-between items-center w-full border-2 px-3 py-3 rounded-lg bg-lime-400 text-xl font-mono font-bold mr-3'>
                        <img className='w-12' src={p.picture} alt="" />
                        <p>{p.name}</p>
                        <p> ${p.price}</p>
                        <button onClick={() => removeCart(p)}

                            type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-5 mb-2 f dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>

                    </div>
                )
            }

        </div>
    );
};

export default Cart;