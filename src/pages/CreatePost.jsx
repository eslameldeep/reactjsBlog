import { React, useState, useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/layout";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export default function CreatePost() {
    let params = useParams();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId] = useState(params.authId);
    const [message, setMessage] = useState("");
    function Reducer(state, action) {

        switch (action.type) {
            case "addPost":
                if (action.payload.post.title !== "" && action.payload.post.body !== "" && action.payload.post.userId !== "")
                    return action.payload.post;
                else
                    break;
            default:
                return {};
        }
    }
    const [state, dispatch] = useReducer(Reducer, {});

    useEffect(() => {
        async function fetchMyAPI(state) {
            try {
                let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    body: JSON.stringify({
                        title: state.title,
                        body: state.body,
                        userId: state.userId,
                    }),
                });
                await res.json();
                if (res.status === 201) {
                    setTitle("");
                    setBody("");
                    setMessage("post successful added  ");
                } else {
                    setMessage("Some error occured");
                }
            } catch (err) {
                console.log(err);
            }
        }
        
        if (state !== undefined) {
            fetchMyAPI(state);
        } else {
            setMessage("something went wrong ");
        }
    }, [state])

    return (
        <Layout>
            <Container>

                <form className="" onSubmit={(e) => { e.preventDefault(); dispatch({ type: "addPost", payload: { post: { title: title, body: body, userId: userId } } }) }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Article Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Article Title" />
                    </Form.Group>

                    <br />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control value={body} placeholder="body" as="textarea" onChange={(e) => setBody(e.target.value)} rows={3} />
                    </Form.Group>

                    <br />
                    <Button type="submit" variant="info"> <FontAwesomeIcon icon={faPlus} /> Create Article</Button>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>

            </Container>
        </Layout>
    )
}