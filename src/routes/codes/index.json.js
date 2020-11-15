import posts from './_posts.js';

const contents = JSON.stringify(
	posts.map((post) => {
		return {
			num: post.num,
			slug: post.slug,
			title: post.title,
			lang: post.lang,
			giflink: post.giflink,
			Date: post.Date,
		};
	}),
);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json',
	});

	res.end(contents);
}
