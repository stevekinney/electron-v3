<script lang="ts">
	export let title: string;
</script>

<article>
	<h2 class="font-semibold text-lg mb-4">{title}</h2>
	<ol class="list-decimal pl-4">
		<slot />
	</ol>
</article>
