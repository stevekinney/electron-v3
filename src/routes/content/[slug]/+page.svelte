<script lang="ts">
	import { title } from '$lib/config.js';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} — {title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose mx-auto">
	<hgroup>
		<h1>{data.meta.title}</h1>
	</hgroup>

	<svelte:component this={data.content} />

	<footer class="bg-primary-100 p-4 mt-10 text-sm">
		Did you find a mistake or typo? File an issue or make a change <a
			href="https://github.com/stevekinney/electron-v3/blob/main/src/content/{data.slug}.md">here</a
		>.
	</footer>
</article>
