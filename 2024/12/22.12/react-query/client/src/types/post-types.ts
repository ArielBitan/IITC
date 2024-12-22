export interface Post {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// Omit _id, createdAt, and updatedAt from the Post interface
export type PostInputs = Omit<Post, "_id" | "createdAt" | "updatedAt">;
