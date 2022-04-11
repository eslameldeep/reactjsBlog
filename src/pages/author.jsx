import React from "react";
import { useParams } from "react-router-dom";
import { useAuthorPosts, useAuthorDetails } from "../hooks/author";
import { Container, Row ,Button} from "react-bootstrap";
import { PostComp } from "../components/post";
import { AuthProfileHeader } from "../components/authProfileHeader";
import { Layout } from "../components/layout" 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ; 
import { faPlus } from '@fortawesome/free-solid-svg-icons' ; 
export default function Author() {
    let params = useParams();

    const Auth = useAuthorDetails(params.authId);
    const Posts = useAuthorPosts(params.authId);
    return (
        <Layout>
            <div>
                <Container>
                    <AuthProfileHeader author={Auth} />
                    <hr />
                    <Link to={"/create/post/auth/" + Auth.id}><Button variant="dark"> <FontAwesomeIcon icon={faPlus} /> Create Article</Button></Link>
                    <hr />
                    
                </Container>
                <Container>
                    <h2>Articles</h2>
                    <Row>
                        {Posts.map((post) => <PostComp key={post.id} author={Auth} post={post} />)}
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}