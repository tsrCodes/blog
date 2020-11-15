<script>
	export let tags = '';
</script>

<style lang="scss">
	@import '../sass/_variables';
	@import '../sass/_mixins';
	.tagicons {
		display: flex;
		align-items: center;
	}
	.icon {
		padding: 0.5rem 0 0 0.5rem;
	}
</style>

<div class="tagicons">
	{#each tags as tag}
		<div class="icon"><img src={`/svgs/${tag}.svg`} alt={tag} width="30rem" height="30rem" /></div>
	{/each}
</div>
