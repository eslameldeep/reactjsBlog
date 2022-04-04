
import { useEffect, useState } from "react";

const creatPostUrl = "https://jsonplaceholder.typicode.com/posts";

export function useCreatePost(_data) {
   
    const [ PostData, setPostData] = useState("");
    useEffect(() => {
        fetch(creatPostUrl, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: _data
          })
            .then((response) => response.json())
            .then((json) => setPostData(json));
    }, []);

    return  PostData ;
}