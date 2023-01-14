import { useState, useEffect } from 'react';
import ItemList from './CategoryList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

//Retornar los items por categoria
const ItemListContainer = ({ id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, 'items');
    const queryItem = query(itemsCollection, where("category", "==", Number(id))); 

    getDocs(queryItem).then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(items);
    });
  }, [id]);

  return (
    <div>
            {items.length === 0 ? (
                <div>Cargando...</div>
            ) : (
                <div>
                    <ItemList items={items} />
                </div>
            )}
        </div>
  );
};

export default ItemListContainer;