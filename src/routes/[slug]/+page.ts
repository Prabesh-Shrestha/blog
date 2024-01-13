import { error, json } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ params }) => {
	let slug: string;
	try {
		slug = params.slug;
		const post = await import(`../../posts/${slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (err) {
		throw error(404, `${err}`);
	}
};
