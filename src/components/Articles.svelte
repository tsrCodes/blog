<script lang="typescript">
	import Tagicon from './Tagicon.svelte';
	export let post;
	import { fly } from 'svelte/transition';
</script>

<style lang="scss">
	@import './src/sass/_variables';
	@import './src/sass/_mixins';
	section {
		margin: 0 auto;
		width: 85vw;
		max-width: 75vw;
	}
	.articles {
		border: 1px solid;
		margin-bottom: 1rem;
		border-radius: 0.5rem;
		box-shadow: var(--box-shadow);
	}
	.first {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.5rem;
		.num {
			font-family: $font-2;
			font-weight: bold;
			font-size: 1.1rem;
			margin-right: 1rem;
		}
	}
	.topic {
		font-size: 1.5rem;
		max-width: 85%;
		margin: 0 0 1.5rem 0.75rem;
		font-weight: 700;
		font-family: $font-4;
	}

	.bottom {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		margin: -1rem 1rem 1rem 1rem;
		.date {
			font-family: $font-4;
			font-size: 1.05rem;
			font-weight: bold;
			margin-left: 1rem;
		}
		.btn {
			padding: 1rem;
			background: none;
			border: none;
			cursor: pointer;
			font-family: 'Fira Code', monospace;
			background: $color-1;
			color: white;
			border-radius: 5px;
			&::before {
				content: 'More';
			}
			@include respond(phone) {
				border-radius: 50px;
				&::before {
					content: '';
				}
			}
		}
	}
</style>

<section>
	<article
		class="articles"
		out:fly={{ x: -100, duration: 1000 }}
		in:fly={{ x: -100, duration: 1000, delay: 1100 }}
	>
		<div class="content">
			<div class="first">
				<Tagicon tags={post.lang} />
				<p class="num">#{post.num}</p>
			</div>
			<h3 class="topic">{post.title}</h3>
			<div class="bottom">
				<p class="date">{post.Date}</p>
				<a rel="prefetch" href="codes/{post.slug}"> <button class="btn"> {`->`} </button> </a>
			</div>
		</div>
	</article>
</section>
