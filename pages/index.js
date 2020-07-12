import info from '../config';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import getAllPosts from '../utils/getAllPosts';

const Index = () => (
  <>
    <Layout>
      <PostList />
    </Layout>
  </>
);

export default Index;

export async function getStaticProps() {
  const test = getAllPosts('_posts');
  console.log('test', test);

  return {
    props: {}
  }
}