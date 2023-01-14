import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

//Se encarga de obtener el detalle del item
const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'items', id);
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  if (Object.keys(item).length !== 0){
    return (
      <ItemDetail item={item} />
    );
    }

};

export default ItemDetailContainer;