import { Navigate, Route, Routes } from "react-router-dom"
import { About } from "../pages/About"
import Posts from "../pages/Posts"
import { Notfound } from "../pages/NotFound"
import { PostIdPage } from "../pages/PostIdPage";
import { Login } from "../pages/Login";
import { RequireAuth } from "../pages/RequierAuth";

export const AppRouter = () => {

  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<RequireAuth />}>
        <Route index element={<Posts />} />
        <Route path="/posts/:id" element={<PostIdPage />} />
      </Route>
    </Routes>
  )
};
