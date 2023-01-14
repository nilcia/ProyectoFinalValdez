import { useState, useContext } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormOrder = () => {

  const { cartItem, totalMount, setFormId } = useContext(CartContext);

  const [form, setForm] = useState({
    buyer: {},
    items: {},
    total: 0
  });

  const [buyerObj, setBuyerObj] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const submitHandler = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const formsCollection = collection(db, 'forms');

    addDoc(formsCollection, form).then((snapshot) => {
      setForm({
        buyer: {},
        items: {},
        total: 0
      });
      setFormId(snapshot.id);
    });

  };

  const validateForm = () => {
    if
      ((buyerObj.name === "") ||
      (buyerObj.phone === "") ||
      (buyerObj.email === "")) {
      return true;
    } else {
      return false;
    }
  };
  const changeHandler = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;

    const buyerObjTmp = {
      ...buyerObj,
      [field]: value,
    }
    setBuyerObj(buyerObjTmp);
    const order = {
      buyer: buyerObjTmp,
      items: cartItem,
      total: totalMount
    }
    setForm(order);
  };

  return (

    <Form onSubmit={submitHandler}>
      <h3>Datos del comprador</h3>
      <Form.Group className="mb-3">
        <Form.Label ><strong>Nombre y Apellido (Requerido)</strong></Form.Label>
        <Form.Control
          placeholder="Ingrese Nombre y Apellido"
          name="name"
          id="name"
          value={buyerObj.name}
          onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><strong>Correo electronico (Requerido)</strong></Form.Label>
        <Form.Control
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese email"
          value={buyerObj.email}
          onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><strong>Telefono (Requerido)</strong></Form.Label>
        <Form.Control
          placeholder="Ingrese Telefono"
          value={buyerObj.phone}
          name="phone"
          id="phone"
          onChange={changeHandler} />
      </Form.Group>
      <Button variant="dark" type="submit" disabled={validateForm()}>
        Realizar Pedido
      </Button>
    </Form>
  );

}

export default FormOrder;