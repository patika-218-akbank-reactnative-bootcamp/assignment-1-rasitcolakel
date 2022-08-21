export const stories = Array.from({ length: 10 }, (v, k) => k).map((id) => ({
  id,
  user: {
    avatar: `https://picsum.photos/id/${id}/200/200`,
    username: "johndoe",
  },
}));

export const posts = [
  { id: 0 },
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/30",
      username: "johndoe",
    },
    content:
      "I love this app, I love this app I love this app, I love this app I love this app I love this app",
    image: "https://picsum.photos/500/400",
    likes: 100,
    comments: 10,
  },
  {
    id: 2,
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/30",
      username: "johndoe",
    },
    content: "I love this app",
    image: "https://picsum.photos/500/400",
    likes: 100,
    comments: 10,
  },
  {
    id: 3,
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/30",
      username: "johndoe",
    },
    content: "I love this app",
    image: "https://picsum.photos/500/400",
    likes: 100,
    comments: 10,
  },
  {
    id: 4,
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/30",
      username: "johndoe",
    },
    content: "I love this app",
    image: "https://picsum.photos/500/400",
    likes: 100,
    comments: 10,
  },
  {
    id: 5,
    user: {
      name: "John Doe" + self.id,
      avatar: "https://picsum.photos/30",
      username: "johndoe",
    },
    content: "I love this app",
    image: "https://picsum.photos/500/400",
    likes: 100,
    comments: 10,
  },
  {
    id: 6,
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/30",
      username: "johndoe",
    },
    content: "I love this app",
    image: "https://picsum.photos/500/400",
    likes: 100,
    comments: 10,
  },
  {
    id: 7,
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/30",
      username: "johndoe",
    },
    content: "I love this app",
    image: "https://picsum.photos/500/400",
    likes: 100,
    comments: 10,
  },
];
