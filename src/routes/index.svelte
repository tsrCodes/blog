<script context="module">
	export async function preload(page, session) {
		return this.redirect(301, '/codes');
	}
</script>

<!--<script lang="typescript">
	export let posts: Post[];
	import type { Post } from '../utils/posts';
	import { fly } from 'svelte/transition';
	import Articles from '../components/Articles.svelte';
</script>-->

<!--<style lang="scss">
	@import '../sass/main.scss';
	@import '../sass/_variables';
</style>-->

<svelte:head>
	<title>TSR Codes</title>
</svelte:head>

<!-- <div
	class="index"
	out:fly={{ x: -100, duration: 1000 }}
	in:fly={{ x: -100, duration: 1000, delay: 1100 }}
>
	<h2><a class="recent" href="/codes">Recent Posts</a></h2>
</div>

{#each posts.slice(0, 2) as post}
	<Articles {post} />
{/each} -->
