<script>
	import Logo from './Logo.svelte';
	// import Logoname from './Logoname.svelte';
	import Toggle from './Toggle.svelte';

	export let segment;
</script>

<style lang="scss">
	@import '../sass/_variables';
	@import '../sass/_mixins';
	nav {
		display: block;
	}
	.container {
		margin: 1rem auto;
		padding: 0 8rem;
		@include respond(phone) {
			margin: 0.5rem auto;
			padding: 0 1rem;
		}
	}
	.main {
		display: flex;
		justify-content: space-between;
		height: 4rem;
		color: var(--text-color);
	}
	.logo {
		display: flex;
		align-items: center;
		flex-shrink: 0;
		font-size: 1.25rem;
		font-weight: bold;
		font-family: $font-1;
		padding-left: 1rem;
		@include respond(phone) {
			font-size: 1.2rem;
		}
		@include respond(tab-port) {
			font-size: 1.75rem;
		}
		@include respond(tab-land) {
			font-size: 2rem;
		}
		@include respond(big-desktop) {
			font-size: 2.5rem;
		}
		&-link {
			display: flex;
			flex-direction: row;
		}
		&-text {
			margin: auto 0;
		}
	}
	.menu {
		display: flex;
		font-size: 1.25rem;
		font-weight: 700;
		font-family: $font-1;
		@include respond(phone) {
			font-size: 1.2rem;
		}
		@include respond(tab-port) {
			font-size: 1.75rem;
		}
		@include respond(tab-land) {
			font-size: 2rem;
		}
		@include respond(big-desktop) {
			font-size: 2.5rem;
		}
		&-link {
			display: flex;
			align-items: center;
			flex-shrink: 0;
			padding: 0 1rem;
		}
	}
</style>

<nav>
	<div class="container">
		<div class="main">
			<div class="logo">
				<a href="/" class="logo-link">
					<Logo />
					<span class="logo-text">Tsr Codes</span>
				</a>
			</div>
			<div class="menu">
				<Toggle class="menu-link" />
				<!-- <a
					class="menu-link"
					rel="prefetch"
					aria-current={segment === 'blog' ? 'page' : undefined}
					href="blog"
				>Blog</a> -->
				<a
					class="menu-link"
					rel="prefetch"
					aria-current={segment === 'codes' ? 'page' : undefined}
					href="codes"
				>Codes</a>
			</div>
		</div>
	</div>
</nav>
