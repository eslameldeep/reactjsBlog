import { useEffect, useState } from "react";


const authorUrl = "https://jsonplaceholder.typicode.com/users/";
const PostUrl = "https://jsonplaceholder.typicode.com/posts/";


export function useAuthorDetails(id) {
    const [authorDetails, setAuthorDetails] = useState([]);

    useEffect(() => {
        fetch(authorUrl + id)
            .then((response) => response.json())
            .then((json) => setAuthorDetails(json));
    }, []);

    return authorDetails;
}

export function useAuthorPosts(id) {
    const [authorPosts, setAuthorPosts] = useState([]);

    useEffect(() => {
        fetch(PostUrl)
            .then((response) => response.json())
            .then(Posts => { return Posts.filter(post=> { return (post.userId == id) }) } )
            .then((json) => setAuthorPosts(json));
    }, []);

    return authorPosts;
}