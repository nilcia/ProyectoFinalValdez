import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './item.css';
import { Link } from 'react-router-dom';
import NumberFormat from '../Utils/NumberFormat';

//Se encarga de dar estilo al item
const sucu = require.context("../../image", true);
const Item = ({ item }) => {
    return (
        <Link to={`/ProyectoFinalValdez/item/${item.id}`} style={{textDecoration:"none"}}>
            
            <Col  md="auto">
                <Card border="secondary" className="d-flex justify-content-center card-container">
                    <Card.Img variant="bottom"  className="image-container" src={sucu(`./${item.image}`)} />
                    <Card.Body>
                        <p style={{color:"#28B463"}} className='card-name'>{item.name} 
                        <br/><strong><NumberFormat number={item.price}/> </strong></p>
                        
                        {/* <Button variant="secondary" size="sm">Ver Detalle</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    );
};

export default Item;