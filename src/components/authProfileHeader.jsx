import React from "react";
import {Card } from "react-bootstrap";

export function AuthProfileHeader({ author }) {
    return (
        <Card>
            <Card.Header> All article written by  : {author.name} </Card.Header>
            <Card.Body>
                <Card.Text>
                    you can visit author website on <a  href={'http://' + author.website}>{author.website}</a>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}