import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import Post from "./pages/Post/Post";
import NavBar from "./shared/NavBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/artical/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
