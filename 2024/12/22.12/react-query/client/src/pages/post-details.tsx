import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getPost } from "../services/post-services";
import ErrorMessage from "../components/Error";
import Loader from "../components/Loader";

const PostDetailsPage = () => {
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

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{post?.title}</h1>
      <p>{post?.content}</p>
      <Link to="/posts" className="text-blue-500 underline mt-3 block">
        Back to Cats
      </Link>
    </div>
  );
};

export default PostDetailsPage;
