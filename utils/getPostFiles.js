import fs from 'fs';
import getDirectory from './getDirectory';

const getPostFiles = (directory) => {
  const postsDirectory = getDirectory(directory);

  return fs.readdirSync(postsDirectory);
}

export default getPostFiles;