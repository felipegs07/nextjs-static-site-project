import getPostFiles from './getPostFiles';
import getPostById from './getPostById';

const getAllPosts = (directory) => {
  const postFiles = getPostFiles(directory);
  
  const posts = postFiles
    .map(postFile => getPostById(postFile, directory));

    return posts;
}

export default getAllPosts;