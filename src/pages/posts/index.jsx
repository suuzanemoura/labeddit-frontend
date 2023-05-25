import Cookies from "universal-cookie";
import { CardPost } from "../../components/CardPost";
import { Header } from "../../components/Header";
import { Textarea } from "../../components/Textarea";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { useEffect, useState } from "react";
import loading_orange from "../../assets/loading_orange.svg";

export default function Posts() {
  useProtectedPage();
  const cookies = new Cookies();
  const token = cookies.get("labedditUserToken");
  const headers = { Authorization: token };

  const { requestData } = useRequestData();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState([]);
  const [newLikeOrDislikePost, setNewLikeOrDislikePost] = useState(null);

  const fetchPosts = async () => {
    const response = await requestData("posts", "GET", undefined, headers);
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [newPost, newLikeOrDislikePost]);

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-full items-center p-8 gap-4">
        <Textarea
          placeholder={"Escreva seu post..."}
          button={"Postar"}
          path={"posts"}
          headers={headers}
          setNewPost={setNewPost}
        />

        <hr className="hr h-0.5" />

        <div className="flex flex-col items-center gap-2 pt-4">
          {!posts.length ? (
            <img
              src={loading_orange}
              alt="Carregando sua requisição"
              className="inline w-6 h-6 mr-3 animate-spin"
            />
          ) : (
            posts.map((post) => {
              return (
                <CardPost
                  key={post.id}
                  post={post}
                  headers={headers}
                  setNewLikeOrDislikePost={setNewLikeOrDislikePost}
                />
              );
            })
          )}
        </div>
      </main>
    </>
  );
}
