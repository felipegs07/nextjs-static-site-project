import { join } from 'path';

const getDirectory = (directory) => {
  return join(process.cwd(), directory);
}

export default getDirectory;