import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './manageinventory.css';

const ManageInventoryData = ({ dress }) => {
    const {dressName, price, img,supplierName, quantity,_id} = dress;
    const navigate = useNavigate()
  return (
  
    <Col md={4} className="  gx-5 mx-auto">
    <Card className="manage-card">
      <Card.Img className="dress-img" variant="top" src={img} />
      <Card.Body>
        <Card.Title>Name:{dressName}</Card.Title>
        <Card.Text>
            <p>id:{_id}</p>
          <p>
            Price: <small>{price}</small>
          </p>
          <h4>Supplier name :{supplierName}</h4>
          <p>
            quantity: <small>{quantity}</small>
          </p>
        </Card.Text>
        <div className="btn btn-danger mx-4">Delete</div>
        
      </Card.Body>
    </Card>
  </Col>

  );
};

export default ManageInventoryData;