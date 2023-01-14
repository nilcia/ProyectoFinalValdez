import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CartContext } from '../../context/CartContext';
import CartList from './CartList';
import FormOrder from './FormOrder';
import NewOrder from './NewOrder';

const CartContainer = () => {
    const { cartItem, totalQuantity, totalMount, formId } = useContext(CartContext);
    return <div>
        {(typeof formId !== 'undefined') && (formId != '') && (cartItem.length === 0) ? (
            <NewOrder description = {'Su pedido se realizó de manera exitosa!!!'}/>
      
        )
            : (
                <div>
                    {cartItem.length === 0 ? (
                        <NewOrder description = {'Su carrito está vacío!!!'}/>
                    ) : (
                        <Container>
                            <br />
                            <Row className="g-4 justify-content-md-center">
                                <Col xs={8}>
                                    <CartList items={cartItem} totalQuantity={totalQuantity} totalMount={totalMount} />
                                </Col>
                                <Col>
                                    <FormOrder />
                                </Col>
                            </Row>
                        </Container>
                    )}

                </div>
            )
        }
    </div>;
}

export default CartContainer;