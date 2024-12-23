import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updatePost } from "../services/post-services";
import { useParams } from "react-router-dom";
import { getPost } from "../services/post-services";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "@/components/Error";
import Loader from "@/components/Loader";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", { id }],
    queryFn: () => getPost(id!),
    enabled: !!id,
  });
  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onError: () => console.log("oops"),
    onSuccess: () => console.log("yay"),
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!post) {
      console.error("Post data is not available.");
      return;
    }

    const updatedPost = {
      ...post,
      title: title || post.title || "",
      content: content || post.content || "",
    };

    console.log(updatedPost);

    try {
      await updatePostMutation.mutateAsync(updatedPost);
      navigate("/posts");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6">Edit Post</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Post Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter post title"
            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-lg font-medium text-gray-700"
          >
            Post Content
          </label>
          <textarea
            id="content"
            placeholder="Enter post content"
            rows={6}
            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
