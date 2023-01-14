import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NewOrder = ({ description }) => {
    return <div>
        <div className="d-flex justify-content-center"><h1>{description}</h1></div>
        <div className="d-flex justify-content-center">
            < Link to={`/`} style={{ textDecoration: "none" }}>
                <Button variant="dark">Realizar un nuevo pedido</Button>
            </Link>
        </div>
    </div>
}
export default NewOrder;