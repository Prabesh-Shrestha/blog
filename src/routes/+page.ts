import type { Post } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const responce = await fetch('/api/posts');
	const posts: Post[] = await responce.json();
	return { posts };
};
