<script lang="ts">
	export let title: string;
	export let slug: string;
</script>

<li>
	<a href="/content/{slug}" class="underline decoration-orange-600">
		{title}
	</a>
</li>
