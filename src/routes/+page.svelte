<script lang="ts">
	import { title } from '$lib/config.js';
	import TableOfContents from '~/lib/components/table-of-contents.svelte';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<TableOfContents />
</main>
