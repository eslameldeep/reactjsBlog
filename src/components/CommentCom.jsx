import React from "react";
import { Col, Card } from "react-bootstrap";
export function CommentComp({ comment }) {
    return (
        <Col lg={6} md={12} >
            <Card style={{ minHeight: '15rem', padding: '10px', marginBottom: '10px' }}>
                <Card.Body>
                    <Card.Title>{comment.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">written by : {comment.email}</Card.Subtitle>
                    <Card.Text>
                        {comment.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}