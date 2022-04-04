import { React, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../components/layout";
// import { useCreatePost } from "../hooks/createPost";
import { Container, Form , Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ; 
import { faPlus } from '@fortawesome/free-solid-svg-icons' ; 

export default function CreatePost() {
    let params = useParams();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState(params.authId);
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: userId,
                }),
            });
            let resJson = await res.json();
            if (res.status === 201) {
                setTitle("");
                setBody("");
                setMessage("The post has been published successfully ");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    //params.authId ;
    // const Auth = useAuthorDetails(params.authId);
    // const Posts = useAuthorPosts(params.authId);
    return (
        <Layout>
            <Container>

                <form className="" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Article Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Article Title" />
                    </Form.Group>

                    <br />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control   value={body} placeholder="body" as="textarea" onChange={(e) => setBody(e.target.value)} rows={3} />
                    </Form.Group>
                    
                    <br />
                    <Button type="submit" variant="info"> <FontAwesomeIcon icon={faPlus} /> Create Article</Button>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>

            </Container>
        </Layout>
    )
}