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
</article>
