import Cookies from "universal-cookie";
import { createContext, useEffect, useState } from "react";
import { useRequestData } from "../hooks/useRequestData";

export const PostsContext = createContext();

export function PostsContextProvider({ children }) {

    const { requestData } = useRequestData();
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(undefined);
    const [newPost, setNewPost] = useState([]);
    const [newLikeOrDislikePost, setNewLikeOrDislikePost] = useState(undefined);
    const [newComment, setNewComment] = useState([]);
    const [newLikeOrDislikeComment, setNewLikeOrDislikeComment] = useState(undefined);

    const cookies = new Cookies();
    const token = cookies.get("labedditUserToken")
    const headers = { Authorization: token };

    const fetchPosts = async () => {
        const response = await requestData("posts", "GET", headers);
        setPosts(response.data);
    };

    useEffect(() => {
        fetchPosts()
    }, [newPost, newLikeOrDislikePost]);

  
    return (
        <PostsContext.Provider
          value={{headers, token, posts, setNewPost, newLikeOrDislikePost, setNewLikeOrDislikePost, post, setPost, newComment, setNewComment, newLikeOrDislikeComment, newLikeOrDislikeComment, setNewLikeOrDislikeComment, newLikeOrDislikeComment}}
        >
          {children}
        </PostsContext.Provider>
      );
}