<script lang="ts">
	import TableOfContents from '~/lib/components/table-of-contents.svelte';
</script>

<div class="flex gap-10">
	<nav class="text-sm">
		<TableOfContents />
	</nav>
	<slot />
</div>
