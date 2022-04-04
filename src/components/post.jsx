import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export function PostComp({ post  , author}) {
    return (
        <Col md={4} >
            <Card style={{ minHeight: '15rem', padding: '10px', marginBottom: '10px' }}>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">written by : {author.name}</Card.Subtitle>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                    <Link className="card-link" to={'/posts/' + post.id}>show articles</Link>
                </Card.Body>
            </Card>
        </Col>
    );
}