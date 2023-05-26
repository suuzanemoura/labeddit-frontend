import { createContext, useContext, useEffect, useState } from "react";
import { useTokenManager } from "../hooks/useTokenManager";
import { useRequestData } from "../hooks/useRequestData";
import { PostsContext, PostsContextProvider } from "./PostsContext";

export const UserContext =  createContext();

export function UserContextProvider({ children }) {

    const { headers, token, newLikeOrDislikePost } = useContext(PostsContext);

    const [ userId, setUserId ] = useState(undefined)
    const [ likesDislikesPosts, setLikesDislikesPosts ] = useState([]);
    const [likesDislikesComments, setLikesDislikesComments] = useState([]);

    const { getPayload } = useTokenManager()
    const { requestData } = useRequestData();

    const getUserId = async () => {
        const response = await getPayload(token)
        setUserId(response.id)
    } 

    const getLikesDislikesOnPosts = async () => {
        if (userId){
            const response = await requestData(`users/${userId}/posts/likes`, "GET", headers)
            setLikesDislikesPosts(response.data)
        }
    }

    useEffect(() => {
        getUserId()
    }, []);

    useEffect(() => {
        getLikesDislikesOnPosts()
    }, [userId, newLikeOrDislikePost])


    return (
        <PostsContextProvider>
            <UserContext.Provider value={{headers, userId, likesDislikesPosts, likesDislikesComments, setLikesDislikesComments}}>
                {children}
            </UserContext.Provider>
        </PostsContextProvider>
    );
}