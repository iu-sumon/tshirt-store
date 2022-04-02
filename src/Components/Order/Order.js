import React, { useContext } from 'react';
import { ShirtContext } from '../../App';
const Order = () => {
    const[shirts]=useContext(ShirtContext)
    return (
        <div>
            <p>this is order:{shirts.length}</p>
        </div>
    );
};

export default Order;