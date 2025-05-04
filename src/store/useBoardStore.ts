import { create } from 'zustand';

export type BoardPost = {
  id: string;
  postId: string;
  author: string;
  profileImage?: string;
  createdAt: string;
  content: string;
  likes: number;
  comments: number;
};

type BoardStore = {
  posts: BoardPost[];
  addPost: (post: BoardPost) => void;
  clearPosts: () => void;
};

export const useBoardStore = create<BoardStore>((set) => ({
  posts: [],
  addPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),
  clearPosts: () => set({ posts: [] }),
}));
