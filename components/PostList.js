import PostCard from './PostCard';
const PostList = () => {
  return (
    <article className="container">
      <h3 className="big-margin-top">Últimos Artigos:</h3>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </article>
  );
}

export default PostList;