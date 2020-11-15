<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`codes/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Tag from '../../components/Tag.svelte';
	export let post;
	import { fly } from 'svelte/transition';
</script>

<style lang="scss">
	@import './src/sass/_variables';
	@import './src/sass/_mixins';
	$size: 5rem;
	.content {
		max-width: 80%;
		color: $text-color;
		text-align: center;
		font-family: $font-2;
		margin: 0px auto 2rem;
		@include respond(phone) {
			max-width: 85%;
		}
		@include respond(tab-port) {
			max-width: 90%;
		}
		.topic {
			font-size: $size * 1.1;
			line-height: $size * 1.5;
			font-weight: 800;
			letter-spacing: 0.1rem;
			padding-top: $size * 0.5;
			@include respond(phone) {
				font-size: $size * 0.5;
				line-height: $size * 0.65;
				padding-top: $size * 0.25;
			}
			@include respond(tab-port) {
				font-size: $size * 0.75;
				line-height: $size * 1.3;
			}
		}
		&-first {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1.25rem;
			flex-wrap: unset;
			font-size: 1.25rem;
			color: $text-color;
			font-weight: bold;
			@include respond(phone) {
				font-size: 0.95rem;
			}

			.num {
				margin-right: 3rem;
				@include respond(phone) {
					margin-right: 1rem;
				}
				font-weight: 600;
			}
		}
		img {
			width: 50%;
			max-width: 100rem;
			margin: 3rem auto 2rem;
			display: block;
			border-radius: 2rem;
			@include respond(phone) {
				width: 100%;
				border-radius: 1rem;
			}
		}
		&-slug {
			font-family: var(--font);
		}
		:global(&-slug) {
			text-align: left;
			font-weight: 400;
			:global(p) {
				font-size: 1.75rem;
				letter-spacing: 0.75px;
				// text-align: center;
			}
			:global(ul) {
				line-height: 1.5;
				list-style-type: disc;
				margin: 0 0 1.75rem 0;
			}
			:global(li) {
				margin: 0 0 0.875rem 0;
			}
		}
	}
	@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,300;1,400&display=swap');
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div
	class="content"
	in:fly={{ x: 250, duration: 1000, delay: 850 }}
	out:fly={{ x: 250, duration: 1000, delay: 300 }}
>
	<h2 class="topic">{post.title}</h2>
	<div class="content-first">
		<span class="num">#{post.num}</span>
		<Tag tags={post.lang} />
	</div>
	<img src={post.giflink} alt={post.title} loading="lazy" />
	<div class="content-slug">
		{@html post.html}
	</div>
</div>
