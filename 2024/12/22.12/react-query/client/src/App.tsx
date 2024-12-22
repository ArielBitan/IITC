import { Routes, Route } from "react-router-dom";
import EditPostPage from "./pages/edit-post-page";
import HomePage from "./pages/home-page";
import PostListPage from "./pages/post-list-page";
import PostDetailsPage from "./pages/post-details";
import CreatePostPage from "./pages/create-post-page";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/posts/edit/:id" element={<EditPostPage />} />
      </Routes>
    </div>
  );
}

export default App;
