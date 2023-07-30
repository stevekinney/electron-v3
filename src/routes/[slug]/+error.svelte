<script lang="ts">
	import { page } from '$app/stores';

	let filename = '';

	$: {
		const match = $page.error?.message.match(/"(.+).md"/);
		console.log(match, $page.error?.message);
		if (match) {
			filename = match[1];
		}
	}
</script>

<div class="max-w-xl mx-auto mt-12">
	<h1 class="text-4xl font-bold mb-4">Uh oh. 💀</h1>
	<p>
		<span class="font-bold">Bummer</span>.
		{#if filename}We can't seem to find a file called <code>{filename}.md</code>.
		{:else}{$page.error?.message}{/if}
	</p>
</div>

<style lang="postcss">
	code {
		@apply text-primary-700;
	}
</style>
