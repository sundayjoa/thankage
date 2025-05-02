import { create } from 'zustand';
import { Post } from '../data/postData';
import { initialPosts } from '../data/postData';

type PostStore = {
  posts: Post[];
  addPost: (post: Post) => void;
};

export const usePostStore = create<PostStore>((set) => ({
    posts: initialPosts,
    addPost: (newPost) =>
      set((state) => ({
        posts: [...state.posts, newPost].sort((a, b) => Number(a.id) - Number(b.id)),
      })),
  }));
  
