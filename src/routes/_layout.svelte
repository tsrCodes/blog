<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<style lang="scss">
	@import '../sass/main.scss';
	@import '../sass/_variables';
</style>

<Header />
<main>
	<slot />
</main>
<Footer />
