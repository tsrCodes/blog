const fs = require('fs');
const path = require('path');
const marked = require('marked');
const matter = require('gray-matter');
const prism = require('prismjs');
import dayjs from 'dayjs';

const cwd = process.cwd();
const postPath = path.join(cwd, 'src/posts/codes/');

const renderer = new marked.Renderer();

renderer.code = (code, language) => {
	const parser = prism.languages[language] || prism.languages.html;
	const highlighted = prism.highlight(code, parser, language);

	return `<div class="codecontainer">
  <div class="top">
  <div class="macStyle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="14"
      viewBox="0 0 54 14"
    >
      <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
        <circle
          cx="6"
          cy="6"
          r="6"
          fill="#FF5F56"
          stroke="#E0443E"
          stroke-width=".5"
        ></circle>
        <circle
          cx="26"
          cy="6"
          r="6"
          fill="#FFBD2E"
          stroke="#DEA123"
          stroke-width=".5"
        ></circle>
        <circle
          cx="46"
          cy="6"
          r="6"
          fill="#27C93F"
          stroke="#1AAB29"
          stroke-width=".5"
        ></circle>
      </g>
    </svg></div><div class="langname">${language}</div></div><pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre></div>`;
};

marked.setOptions({ renderer });

const posts = fs
	.readdirSync(postPath)
	.filter((fileName) => /\.md$/.test(fileName))
	.map((fileName) => {
		const fileMd = fs.readFileSync(path.join(postPath, fileName), 'utf8');
		const { data, content: rawContent } = matter(fileMd);
		const { title, num, lang, date, giflink } = data;
		const slug = fileName.split('.')[0];
		let content = rawContent;
		const Date = dayjs(date).format('dddd MMM DD YYYY');
		const html = marked(content);
		return {
			slug,
			title,
			num: num || slug,
			lang,
			giflink,
			html,
			Date,
		};
	});

posts.forEach((post) => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
