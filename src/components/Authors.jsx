import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export function AuthorsComp({ author }) {
    return (
        <Col lg={3} md={4} sm={6}  >
            <Card style={{ minHeight: '15rem', padding: '10px', marginBottom: '10px' }}>
                <Card.Body>
                    <Card.Title>{author.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{author.website}</Card.Subtitle>
                    <Card.Text>
                        {author.name} from {author.address.city} work in {author.company.name}
                    </Card.Text>

                    <Link className="card-link" to={'/authors/' + author.id }>show articles</Link>
                    
                </Card.Body>
            </Card>
        </Col>
    );
}