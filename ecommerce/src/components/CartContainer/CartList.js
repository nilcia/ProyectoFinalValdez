import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import NumberFormat from '../Utils/NumberFormat';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartList = ({ items, totalQuantity, totalMount }) => {
    const { removeItem, clear } = useContext(CartContext);

    const removeItemCard = (ev) => {
        removeItem(ev.target.value);
    };

    const clearCard = () => {
        clear();
    }

    return (
        <div>
            <h3>Listado de Items</h3>
            <strong>
                <Row>

                    <Col xs={5}>Articulo </Col>
                    <Col >Precio</Col>
                    <Col>Cantidad</Col>
                    <Col>Total</Col>
                    <Col></Col>

                </Row>
            </strong>
            <hr />
            {items.map((item) => (
                <div>
                    <Row key={item.id}>
                        <Col xs={5}>{item.name} </Col>
                        <Col ><NumberFormat number={item.price} /></Col>
                        <Col>{item.contador}</Col>
                        <Col><NumberFormat number={item.contador * item.price} /></Col>
                        <Col>
                            <Button variant="dark" value={item.id} onClick={removeItemCard} size="sm">
                                Eliminar</Button> </Col>
                    </Row>
                    <hr />
                </div>
            ))
            }
            
            <div className='cart-list-totales'>
                <div className='col-6 total-articulos'>Total Articulos: <strong>{totalQuantity}</strong></div>
                <div className='col-6 total-monto'>Total a Pagar: <strong><NumberFormat number={totalMount}></NumberFormat></strong></div>

            </div>
            <br />
            <Button variant="dark" onClick={clearCard}>Vaciar Carrito</Button>
        </div>
    );
};

export default CartList;
