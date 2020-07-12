import remark from 'remark';
import html from 'remark-html';

const convertMarkdownToHtml = async (markdown) => {
  const convertedHtml = await remark()
    .use(html)
    .process(markdown);

  return convertedHtml.toString();
}

export default convertMarkdownToHtml;