import { PostsContextProvider } from "./contexts/PostsContext";
import { UserContextProvider } from "./contexts/UserContext";
import { Router } from "./routes/Router";

export default function App() {
  return (
    <PostsContextProvider>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </PostsContextProvider>
  )
}