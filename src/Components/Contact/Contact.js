import React, { useContext } from 'react';
import { ShirtContext } from '../../App';

const Contact = () => {
    const [shirts]=useContext(ShirtContext)
    return (
        <div>
            <p>This is contact :{shirts.length}</p>
        </div>
    );
};

export default Contact;