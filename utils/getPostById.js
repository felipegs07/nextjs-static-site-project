import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import getDirectory from './getDirectory';

const getPostById = (postFile, directory) => {
  const realPostFile = postFile.replace(/\.md$/, '');

  const fullPath = join(getDirectory(directory), `${realPostFile}.md`);
  const fileContent = fs.readFileSync(fullPath, {encoding:'utf8', flag:'r'});

  const { data, content } = matter(fileContent);

  return {
    data,
    content,
    postId: realPostFile
  }
}

export default getPostById;