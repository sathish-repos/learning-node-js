// module js syntax
// note: to execute add type:module in package json

const posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
];

const getPost = () => posts;

export const getPostsLength = () => posts.length;

export default getPost;
