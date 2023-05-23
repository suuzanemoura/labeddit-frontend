import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/not-found";
import Signup from "../pages/signup";
import Posts from "../pages/posts";
import PostDetails from "../pages/post-details";
import UserAccount from "../pages/user-account";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetails />} />
        <Route path="account/:userId" element={<UserAccount />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};