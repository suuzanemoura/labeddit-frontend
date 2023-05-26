import { CardPost } from "../../components/CardPost";
import { Header } from "../../components/Header";
import { Textarea } from "../../components/Textarea";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import loading_orange from "../../assets/loading_orange.svg";
import { UserContext } from "../../contexts/UserContext";
import { PostsContext } from "../../contexts/PostsContext";
import { useContext } from "react";

export default function Posts() {
  useProtectedPage();

  const { headers, likesDislikesPosts } = useContext(UserContext);
  const { posts, setNewPost, setNewLikeOrDislikePost } = useContext(PostsContext);

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
                  likesDislikesPosts={likesDislikesPosts}
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
