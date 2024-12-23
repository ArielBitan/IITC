import { Post, PostInputs } from "../types/post-types";
import api from "../lib/api";

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await api.get("/posts");
  return data;
};

export const getPost = async (id: string): Promise<Post> => {
  const { data } = await api.get(`/posts/${id}`);
  return data;
};

export const createPost = async (Post: PostInputs): Promise<Post> => {
  const { data } = await api.post("/posts", Post);
  return data;
};

export const updatePost = async (updatedPost: Post): Promise<Post> => {
  console.log(updatedPost);
  const { data } = await api.put(`/posts/${updatedPost._id}`, updatedPost);
  return data;
};

export const deletePost = async (id: string): Promise<void> => {
  await api.delete(`/posts/${id}`);
};
