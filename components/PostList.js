import Post from './Post';
const PostList = () => {
  return (
    <article className="container">
      <h3 className="big-margin-top">Últimos Artigos:</h3>
      <Post />
      <Post />
      <Post />
      <Post />
    </article>
  );
}

export default PostList;