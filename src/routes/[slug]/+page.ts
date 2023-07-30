import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug.replace('.md', '');

	try {
		const post = await import(`../../content/${slug}.md`);

		return {
			content: post.default,
			meta: post.metadata,
			slug
		};
	} catch (e) {
		throw error(404, `We can't seem to find a file called "${params.slug}".`);
	}
};
