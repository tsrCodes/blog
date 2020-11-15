<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`codes.json`)
			.then((r) => r.json())
			.then((posts) => {
				posts.sort((a, b) => (a.num < b.num ? 1 : -1));
				return { posts };
			});
	}
</script>

<script>
	import Search from '../../components/Search.svelte';
	export let posts;
</script>

<style lang="scss">
	@import './src/sass/_variables';
	@import './src/sass/_mixins';
</style>

<svelte:head>
	<title>TSR Codes</title>
</svelte:head>

<Search {posts} />
