import { useContext } from 'react';
import { Cart } from 'react-bootstrap-icons';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <div>
            < Link to={`/cart`} style={{ textDecoration: "none" }}>

                <p><Cart
                    color="white"
                    size={30}
                /> {totalQuantity}</p>
            </Link>
        </div>

    );
};

export default CardWidget;