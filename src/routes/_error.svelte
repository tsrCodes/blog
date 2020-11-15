<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style lang="scss">
	@import '../sass/main.scss';

	#message {
		font-family: $font-1;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		min-height: 65vh;
		color: $color-1;
	}
	#message a {
		font-size: 40px;
		display: block;
		text-decoration: none;
		margin-top: 20px;
		@include respond(phone) {
			font-size: 30px;
		}
		@include respond(tab-port) {
			font-size: 30px;
		}
	}
	#message h1 {
		font-size: 60px;
		font-weight: 300;
		@include respond(phone) {
			font-size: 30px;
		}
		@include respond(tab-port) {
			font-size: 60px;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div id="message">
	<h1>404 {error.message} <a href="/">Go Back</a></h1>
</div>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
