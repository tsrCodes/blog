<script>
	const year = new Date().getFullYear();
</script>

<style lang="scss">
	@import '../sass/_variables';
	@import '../sass/_mixins';
	svg {
		width: 1.9rem;
		height: 1.9rem;
		margin: 0 0.5rem;
	}
	.svesap {
		text-align: center;
		font-size: 1.25rem;
		font-family: 'arimamadurai-regular';
		font-weight: 700;
		color: $text-color;
	}
	#facebook path {
		stroke: transparent;
		fill: $fb;
		box-shadow: -5px -5px 5px $fb;
	}
	#instagram path {
		fill: transparent;
		stroke: $ig;
	}
	#pinterest path {
		fill: $pinterest;
		stroke: transparent;
	}
	#twitter path {
		fill: $twitter;
		stroke: $twitter;
	}

	.container {
		margin: 0.5rem auto;
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
	}
	.copy {
		display: flex;
		align-items: center;
		flex-shrink: 0;
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
			flex-direction: row;
		}
		&-text {
			margin: auto 0;
		}
	}
	.social {
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
			padding-left: 1rem;
			@include respond(tab-port) {
				padding-left: 1.25rem;
			}
			@include respond(big-desktop) {
				padding-left: 1.75rem;
			}
		}
	}
</style>

<div class="svesap">
	Handcrafted with
	<a href="https://svelte.dev/">Svelte</a>
	&
	<a href="https://sapper.svelte.dev/">Sapper</a>
</div>

<div class="container">
	<div class="main">
		<div class="copy">
			<a href="/" class="copy-link"> <span class="copy-text"> &copy; {year} TsrCodes</span> </a>
		</div>
		<div class="social">
			<a class="social-link" href="https://www.facebook.com/tsrcodes/">
				<svg viewBox="0 0 32 32">
					<use xlink:href="#facebook" />
				</svg></a>
			<a class="social-link" href="https://www.instagram.com/tsrcodes/">
				<svg viewBox="0 0 32 32">
					<use xlink:href="#instagram" />
				</svg></a>
			<a class="social-link" href="https://www.pinterest.com/tsrcodes/">
				<svg viewBox="0 0 32 32">
					<use xlink:href="#pinterest" />
				</svg></a>
			<a class="social-link" href="https://www.twitter.com/tsrcodes/">
				<svg viewBox="0 0 32 32">
					<use xlink:href="#twitter" />
				</svg></a>
		</div>
	</div>
</div>

<svg
	display="none"
	version="1.1"
	preserveAspectRatio="xMinYMin"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
	<defs>
		<g id="facebook">
			<a xlink:href="https://www.facebook.com/tsrcodes">
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M13,30V18H8v-5h5V8.827C13,4.083,15.311,2,19.253,2C21.144,2,22.526,2.141,23,2.205V7h-2.74C18.583,7,18,7.884,18,9.671 V13h5l-1,5h-4v12H13z"
				/>
			</a>
		</g>
		<g id="instagram">
			<a xlink:href="https://www.instagram.com/tsrcodes">
				<path
					xmlns="http://www.w3.org/2000/svg"
					stroke-miterlimit="10"
					stroke-width="2"
					d="M7.546,25h10.909C22.07,25,25,22.07,25,18.454V7.545C25,3.93,22.07,1,18.454,1H7.545C3.93,1,1,3.93,1,7.546v10.909C1,22.07,3.93,25,7.546,25z"
				/>
				<path
					xmlns="http://www.w3.org/2000/svg"
					stroke-miterlimit="10"
					stroke-width="2"
					d="M13 7A6 6 0 1 0 13 19A6 6 0 1 0 13 7Z"
				/>
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M20.5 4A1.5 1.5 0 1 0 20.5 7A1.5 1.5 0 1 0 20.5 4Z"
				/>
			</a>
		</g>
		<g id="pinterest">
			<a xlink:href="https://www.pinterest.com/tsrcodes">
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M13,0.188C5.924,0.188,0.188,5.924,0.188,13c0,5.421,3.372,10.045,8.128,11.917 c-0.021-0.438-0.018-2.705,1.56-9.474c0.211-2.258-0.082-3.059-0.082-3.997c0-2.129,1.106-2.578,1.752-2.578 c0.921,0,2.193,0.352,2.193,1.836c0,1.7-1.386,2.147-1.386,2.147s-0.1,0.435-0.215,1.643c-0.115,1.21,0.369,2.52,2.343,2.52 c3.165,0,3.653-4.393,3.653-5.602c0-1.67-1.224-5.06-5.024-5.06c-5.068,0-5.94,4.54-5.94,5.751c0,0.518,0.143,1.432,0.241,1.823 c0.957,0.155,0.858,1.465,0.449,1.837c-0.455,0.409-2.793,0.896-2.793-4.236c0-4.887,4.356-7.405,8.179-7.405 c3.639,0,7.603,2.511,7.603,7.348c0,4.318-3.104,7.718-6.364,7.718c-1.958,0-2.996-1.613-2.996-1.613 c0,1.51-2.773,6.699-3.128,7.358c1.44,0.561,3.001,0.88,4.64,0.88c7.076,0,12.813-5.736,12.813-12.813S20.076,0.188,13,0.188z"
				/>
			</a>
		</g>
		<g id="twitter">
			<a xlink:href="https://www.twitter.com/tsrcodes">
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M24,4.3c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2C19.3,2.6,18,2,16.6,2 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,7.8,4.1,5.9,1.7,2.9C1.2,3.6,1,4.5,1,5.4c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.4,1.6,9.2,1,8.9c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.2,23.3,5.3,24,4.3"
				/>
			</a>
		</g>
		<g id="youtube">
			<a xlink:href="https://www.youtube.com/tsrcodes">
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M6.313.024h1.502L8.783 3.89h.094l.924-3.865h1.518L9.582 5.679v4.013H8.089v-3.83L6.313.024zM11.251 4.191c0-.552.179-.993.536-1.319.357-.327.836-.492 1.438-.492.551 0 1 .172 1.349.519C14.924 3.242 15.1 3.688 15.1 4.23v3.684c0 .61-.172 1.089-.515 1.438-.345.347-.816.521-1.419.521-.582 0-1.044-.181-1.395-.539-.348-.357-.521-.84-.521-1.446V4.191zM12.614 8.021c0 .195.047.348.145.455.093.106.228.16.403.16.181 0 .321-.055.428-.165.105-.107.159-.258.159-.45V4.137c0-.154-.055-.281-.163-.377-.107-.095-.249-.145-.424-.145-.162 0-.295.05-.396.145-.101.096-.152.223-.152.377V8.021zM20.01 2.561v7.131h-1.326V8.904c-.244.291-.498.512-.764.663-.263.15-.52.228-.768.228-.306 0-.537-.106-.693-.318s-.233-.529-.233-.956v-5.96h1.325v5.469c0 .166.028.289.085.364.054.074.146.114.269.114.098 0 .222-.05.369-.15.15-.099.286-.229.41-.383V2.561H20.01z"
				/>
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M20.173 17.284c-.159 0-.269.043-.334.132-.047.066-.104.22-.104.553v.57h.869v-.57c0-.328-.061-.483-.111-.556C20.431 17.326 20.326 17.284 20.173 17.284zM15.084 17.313c-.062.031-.124.078-.188.143v4.322c.08.081.158.141.231.178.081.04.163.06.252.06.169 0 .221-.068.237-.091.041-.052.087-.161.087-.398v-3.682c0-.204-.038-.363-.111-.459C15.494 17.254 15.302 17.203 15.084 17.313z"
				/>
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M23.777,14.409c0-1.722-1.413-3.119-3.153-3.119c-2.486-0.104-5.03-0.149-7.627-0.146 c-2.595-0.003-5.14,0.042-7.627,0.146c-1.739,0-3.152,1.397-3.152,3.119c-0.104,1.362-0.151,2.727-0.147,4.092 c-0.004,1.363,0.043,2.727,0.148,4.092c0,1.724,1.412,3.121,3.151,3.121c2.487,0.103,5.032,0.148,7.627,0.143 c2.597,0.006,5.141-0.04,7.627-0.143c1.74,0,3.153-1.397,3.153-3.121c0.104-1.365,0.152-2.729,0.147-4.092 C23.93,17.136,23.882,15.771,23.777,14.409z M6.952,23.195c0,0.083-0.067,0.15-0.15,0.15H5.309c-0.083,0-0.15-0.067-0.15-0.15 v-8.114H3.765c-0.083,0-0.15-0.067-0.15-0.15v-1.4c0-0.083,0.067-0.15,0.15-0.15h4.582c0.083,0,0.15,0.067,0.15,0.15v1.4 c0,0.083-0.067,0.15-0.15,0.15H6.952V23.195z M12.265,23.195c0,0.083-0.067,0.15-0.15,0.15h-1.327c-0.083,0-0.15-0.067-0.15-0.15 V22.79c-0.177,0.172-0.354,0.308-0.538,0.412c-0.289,0.166-0.565,0.247-0.845,0.247c-0.355,0-0.629-0.128-0.813-0.38 c-0.174-0.239-0.263-0.591-0.263-1.045v-5.959c0-0.083,0.067-0.15,0.15-0.15h1.327c0.083,0,0.15,0.067,0.15,0.15v5.465 c0,0.179,0.033,0.252,0.053,0.28c0.009,0.012,0.036,0.05,0.149,0.05c0.038,0,0.126-0.016,0.283-0.124 c0.128-0.086,0.243-0.19,0.345-0.313v-5.358c0-0.083,0.067-0.15,0.15-0.15h1.327c0.083,0,0.15,0.067,0.15,0.15V23.195z M17.368,21.718c0,0.541-0.116,0.964-0.345,1.257c-0.237,0.306-0.579,0.461-1.018,0.461c-0.279,0-0.535-0.058-0.762-0.172 c-0.121-0.062-0.238-0.142-0.349-0.24v0.172c0,0.083-0.067,0.15-0.15,0.15h-1.338c-0.083,0-0.15-0.067-0.15-0.15V13.53 c0-0.083,0.067-0.15,0.15-0.15h1.338c0.083,0,0.15,0.067,0.15,0.15v2.734c0.11-0.1,0.226-0.184,0.345-0.252 c0.226-0.126,0.456-0.189,0.686-0.189c0.468,0,0.832,0.175,1.082,0.52c0.239,0.331,0.36,0.809,0.36,1.42V21.718z M22.269,19.799 c0,0.083-0.067,0.15-0.15,0.15h-2.384v1.193c0,0.436,0.059,0.621,0.107,0.7c0.039,0.064,0.111,0.146,0.319,0.146 c0.168,0,0.282-0.04,0.341-0.12c0.028-0.042,0.102-0.206,0.102-0.727v-0.497c0-0.083,0.067-0.15,0.15-0.15h1.364 c0.083,0,0.15,0.067,0.15,0.15v0.536c0,0.768-0.182,1.357-0.538,1.753c-0.357,0.4-0.896,0.604-1.601,0.604 c-0.636,0-1.146-0.216-1.515-0.641c-0.364-0.419-0.549-0.996-0.549-1.717v-3.2c0-0.656,0.203-1.199,0.604-1.616 c0.402-0.418,0.928-0.63,1.562-0.63c0.648,0,1.156,0.198,1.509,0.589c0.351,0.389,0.528,0.945,0.528,1.657V19.799z"
				/>
			</a>
		</g>
	</defs>
</svg>
