import { useEffect, useState } from "react";


const postUrl = "https://jsonplaceholder.typicode.com/posts/";
let commentsUrl = (_id) => {
    return `https://jsonplaceholder.typicode.com/posts/${_id}/comments` ;
};


export function useGetPostById(id) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(postUrl + id)
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, []);

    return post ;
}

export function useGetCommentsById(id) {
    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch(commentsUrl(id))
            .then((response) => response.json())
            // .then(Posts => { return Posts.filter(post=> { return (post.userId == id) }) } )
            .then((json) => setComment(json));
    }, []);

    return comment;
}