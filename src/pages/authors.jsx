import React from "react";
import { useAuthors } from "../hooks/authors";
import { AuthorsComp } from "../components/Authors";
import { Container, Row } from 'react-bootstrap';
import { Layout } from "../components/layout"
export default function Authors() {
    const authors = useAuthors();

    return (
        <Layout>
            <div>
                <h1>Hello</h1>
                <p>The list of authers</p>
                <Container>
                    <Row>
                        {authors.map((author) => <AuthorsComp key={author.id} author={author} />)}
                    </Row>
                </Container>
            </div>
        </Layout>
    );
}

