export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	date: string;
	description: string;
	categories: Categories[];
	published: boolean;
};
