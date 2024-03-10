import { Route, Routes } from "react-router-dom"
import { About } from "../pages/About"
import Posts from "../pages/Posts"
import { Notfound } from "../pages/NotFound"
import { PostIdPage } from "../pages/PostIdPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  )
};
