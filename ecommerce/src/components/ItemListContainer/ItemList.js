import Item from './Item';
import './itemList.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ItemList = ({ items }) => {
  return (
    // <div className="d-flex justify-content-center">
    // <Row xs={1} md={6} className="g-4 justify-content-md-center">
    <Container>
      <Row xs={1} md={5} className="gx-4 gy-2">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </Row>
    </Container>
    // </div>
  );
};

export default ItemList;
