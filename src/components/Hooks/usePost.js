import { useEffect, useState } from "react";

const usePost = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return [posts, setPost];

}

export default usePost;