import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./MovieCard.css";

export default function MovieCard({ img, title, text, genre }) {
  return (
    <Card style={{ width: '18rem' }} className="h-100">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <div>
          <strong>Genre:</strong> {genre}
        </div>
        <div className="mt-auto d-flex justify-content-between">
          <Button variant="primary">Details</Button>
          <Button variant="outline-warning" size="sm">Add to Favourite</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
