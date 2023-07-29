<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let slug: string;

	$: active = $page.params.slug === slug;
</script>

<li>
	<a
		href="/content/{slug}"
		class="underline decoration-primary-600 underline-offset-2 hover:text-primary-800"
		class:active
	>
		{title}
	</a>
</li>

<style lang="postcss">
	.active {
		@apply font-semibold;
	}
</style>
