import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostById, useGetCommentsById } from "../hooks/showPostHooks";
import { Container, Row } from "react-bootstrap";
import { CommentComp } from "../components/CommentCom";
import { Layout } from "../components/layout"
export default function ShowPost() {
    let params = useParams();

    const post = useGetPostById(params.postId);
    const comments = useGetCommentsById(params.postId);
    return (
        <Layout>
            <div>
                <Container>
                    <h2>Article</h2>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <hr />
                </Container>
                <Container>
                    <h2>Comments</h2>
                    <Row>
                        {comments.map((comment) => <CommentComp key={comment.id} comment={comment} />)}
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}