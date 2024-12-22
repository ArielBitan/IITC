import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPosts } from "../services/post-services";
import { Post } from "../types/post-types";
import Loader from "../components/Loader";
import ErrorMessage from "../components/Error";

const PostListPage = () => {
  const queryClient = useQueryClient();

  const {
    data: posts,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  const deletepostMutation = useMutation({
    mutationFn: deletePost,

    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousposts = queryClient.getQueryData(["posts"]);
      queryClient.setQueryData(["posts"], (posts: Post[]) => {
        return posts.filter((post) => post._id !== id);
      });
      return { previousposts };
    },

    onError: (err, variables, context) => {
      queryClient.setQueryData(["posts"], context?.previousposts);
      console.log("oops", err);
    },
    onSuccess: () => console.log("yay"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  async function handleDelete(id: string) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (isConfirmed) {
      await deletepostMutation.mutateAsync(id);
    }
  }
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  if (!posts) return null;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Post List</h1>
      {isFetching && <p>Getting fresh data...</p>}
      <ul>
        {posts.map((post) => (
          <li key={post._id} className="mb-3 flex justify-between">
            <Link to={`/posts/${post._id}`} className="text-blue-500 underline">
              {post.title}
            </Link>
            <button
              onClick={() => handleDelete(post._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;
