import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

//Se encarga de obtener los items de Firebase
const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');

        getDocs(itemsCollection).then((snapshot) => {
            const items = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setItems(items);
        });
    }, []);

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