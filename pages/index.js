import info from '../config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostList from '../components/PostList';

const Index = () => (
  <>
    <Header/>
      <PostList />
    <Footer />
  </>
);

export default Index;