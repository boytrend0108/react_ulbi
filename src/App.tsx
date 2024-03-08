import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import Posts from "./pages/Posts";

function App() {

  return (
    <HashRouter>
      <div className="navbar">
        <Link className="navbar__link" to='./about'>About</Link>
        <Link className="navbar__link" to='./posts'>Posts</Link>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
