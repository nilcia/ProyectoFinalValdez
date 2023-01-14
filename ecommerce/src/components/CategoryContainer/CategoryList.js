import Item from '../ItemListContainer/Item';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ItemList = ({ items }) => {
  return (
    <Container>
      <Row xs={1} md={5} className="g-4">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
