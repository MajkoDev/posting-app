import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Redux Toolkit",
    content:
      "A comprehensive package for managing state in React applications, providing utilities like simplified Redux setup, immutable state management, and middleware integration for efficient data flow.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
      heart: 0,
    },
  },
  {
    id: "2",
    title: "React Router",
    content:
      "A library for declaratively defining routes in React applications, enabling navigation between different views or components based on the URL, facilitating a single-page application architecture.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
      heart: 0,
    },
  },
  {
    id: "3",
    title: "React Query",
    content:
      "A tool for managing server-state and asynchronous data fetching in React applications, offering a concise API for caching, background data fetching, and handling loading and error states seamlessly.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
      heart: 0,
    },
  },
  {
    id: "4",
    title: "Zustand",
    content:
      "A minimalistic state management library for React applications, offering a simple and flexible API to manage global or local state with ease, without the complexity of Redux.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
      heart: 0,
    },
  },
  {
    id: "5",
    title: "Axios",
    content:
      "A promise-based HTTP client for making AJAX requests in React applications, offering features like request and response interceptors, automatic transformation of JSON data, and cancellation of requests.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
      heart: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              thumbsDown: 0,
              heart: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
