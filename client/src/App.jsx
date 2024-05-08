import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import Post from "./pages/Post/Post";
import NavBar from "./shared/NavBar/NavBar";
import SignUp from "./pages/auth/Signup/SignUp";
import Login from "./pages/auth/Login/Login";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/article/:id" element={<Post />} />
          <Route path="/registration" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
