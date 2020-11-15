<script lang="typescript">
	import { fly } from 'svelte/transition';

	import Articles from './Articles.svelte';
	import type { Post } from '../utils/posts';
	export let posts: Post[];
	let searchResults: string = '';
	let filteredPosts: Post[] = [];

	$: {
		filteredPosts = posts.filter(
			(post: Post) =>
				post.title.toLowerCase().includes(searchResults.toLowerCase()) ||
				post.num.toString().includes(searchResults),
			// post.lang.forEach().toString.includes(searchResults),
		);
	}
</script>

<style lang="scss">
	@import '../sass/_variables';
	@import '../sass/_mixins';
	.notfound {
		display: block;
		text-align: center;
		font-size: 2rem;
		font-weight: 600;
		color: $text-color;
		font-family: $font-2;
		padding: 5rem 0;
	}
	.search {
		position: relative;
		margin: 2rem auto;
		width: 85%;
		max-width: 480px;
	}
	.searchbox {
		width: 100%;
		height: 4rem;
		border: 1px solid $text-color;
		color: $text-color;
		background: $bg-color;
		border-radius: 50px;
		box-shadow: $box-shadow;
		outline: none;
		font-size: 1.4rem;
		text-indent: 4rem;
	}
	svg {
		width: 2.2rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 1.25rem;
		fill: $text-color;
	}
	.searchbox::-webkit-search-cancel-button {
		position: relative;
		right: 15px;
		cursor: pointer;
	}
</style>

<div
	class="search"
	out:fly={{ x: -100, duration: 1000 }}
	in:fly={{ x: -100, duration: 1000, delay: 1100 }}
>
	<input class="searchbox" bind:value={searchResults} type="search" />

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="64px" height="64px"><path
			d="M79.2 25.5L79.2 25.5c-14.8-14.8-38.9-14.8-53.7 0-14.8 14.8-14.8 38.9 0 53.7 7.4 7.4 17.1 11.1 26.9 11.1s19.5-3.7 26.9-11.1C94 64.4 94 40.3 79.2 25.5zM75 75c-12.5 12.5-32.8 12.5-45.3 0-12.5-12.5-12.5-32.8 0-45.3 6.2-6.2 14.4-9.4 22.6-9.4 8.2 0 16.4 3.1 22.6 9.4C87.4 42.2 87.4 62.5 75 75zM104.7 113.7c2.3 0 4.6-.9 6.4-2.6l0 0c3.5-3.5 3.5-9.2 0-12.7L98.3 85.6c-1.7-1.7-4-2.6-6.4-2.6-1.4 0-2.7.3-3.9.9l-2.5-2.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l2.5 2.5c-.6 1.2-.9 2.5-.9 3.9 0 2.4.9 4.7 2.6 6.4L98.3 111C100.1 112.8 102.4 113.7 104.7 113.7zM88.9 91.9c0-.8.3-1.6.9-2.1.6-.6 1.3-.9 2.1-.9s1.6.3 2.1.9l12.7 12.7c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0L89.8 94.1C89.2 93.5 88.9 92.7 88.9 91.9z"
		/>
		<path
			d="M52.3 26.3C45.4 26.3 38.9 29 34 34c-4.7 4.7-7.3 10.8-7.6 17.4-.1 1.7 1.2 3 2.9 3.1 0 0 .1 0 .1 0 1.6 0 2.9-1.3 3-2.9.2-5.1 2.3-9.8 5.8-13.4 3.8-3.8 8.8-5.9 14.1-5.9 1.7 0 3-1.3 3-3S54 26.3 52.3 26.3zM35 64A3 3 0 1 0 35 70 3 3 0 1 0 35 64z"
		/></svg>
</div>
{#if filteredPosts.length > 0}
	{#each filteredPosts as post}
		<Articles {post} />
	{/each}
{:else}
	<span class="notfound">Not Yet Posted on this topic . Try using different query or another search.</span>
{/if}
