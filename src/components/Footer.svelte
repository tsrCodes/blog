<script>
	// import Social from './Social.svelte';
</script>

<style lang="scss">
	@import '../sass/main.scss';
	@import '../sass/_variables';
	footer {
		text-align: center;
		font-size: 1.5rem;
		font-family: $font-4;
		margin: 2rem 0;
		@include respond(phone) {
			font-size: 1rem;
		}
	}
</style>

<footer>
	<!-- <Social /> -->
	©
	{new Date().getFullYear()}
	TSR Codes &dash needs to update 💜
	<!-- &dash; Handcrafted with
	<a href="https://svelte.dev/">Svelte</a>,
	<a href="https://sapper.svelte.dev/">Sapper</a>
	&
	<a href="https://sass-lang.com/">SCSS</a> -->
</footer>
