import Layout from '../../components/Layout';
import PostContent from '../../components/PostContent';
import getAllPosts from '../../utils/getAllPosts';
import getPostById from '../../utils/getPostById';
import convertMarkdownToHtml from '../../utils/convertMarkdownToHtml';

const Post = ({ post }) => { 
  console.log('post', post);

  return (
    <Layout>
      <PostContent 
        content={post.content}
        title={post.title}
        date={post.date}
      />
    </Layout>
  )
}

export default Post;

export async function getStaticProps({ params }){
  const post = getPostById(params.id, '_posts');

  const content = await convertMarkdownToHtml(post.content);
  console.log('statuc', post)
  return {
    props: {
      post: {
        ...post.data,
        content
      }
    }
  }
}

export async function getStaticPaths(){
  const posts = getAllPosts('_posts');

  return {
    paths: posts.map(post => {
      return {
        params: {
          id: post.postId
        }
      }
    }),
    fallback: false
  }
}