import { error, json } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ params }) => {
	if (params.slug) {
		const post = await import(`../../posts/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} else {
		throw error(404, `Could not find ${params.slug}`);
	}
};
