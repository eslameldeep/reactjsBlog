import React from "react";
import { Container } from "react-bootstrap";
import {Layout} from "../components/layout";
export default function About() {
    return (
        <Layout>
            <Container>
                <p>
                    Blogging platforms allow the user to publish a post, display the date that the post was published, and assign a specific author assigned to the post. These software or web-based services also allow users to tag content with specific categories, making it easier to search for all posts on topic within the blog. These platforms also allow users to tag posts with multiple keywords as another way to search for specific topics.
                </p>
            </Container>
        </Layout>
        
    );
}