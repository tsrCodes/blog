<script>
	export let tags = '';
</script>

<style lang="scss">
	@import '../sass/_variables';
	@import '../sass/_mixins';
	p {
		padding: 0.25rem 0.75rem;
		margin-right: 1rem;
		border-radius: 0.55rem;
		@include respond(phone) {
			margin-right: 0.5rem;
		}
	}
	.html {
		background: #e44d26;
	}
	.css {
		background: #1572b6;
	}
	.javascript {
		background: #f0db4f;
	}
	.react {
		background: #61dafb;
	}
	.svelte {
		background: #ff3e00;
	}
	.sapper {
		background: #159794;
	}
</style>

{#each tags as tag}
	<p class={tag}>#{tag}</p>
{/each}
