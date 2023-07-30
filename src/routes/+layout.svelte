<script>
	// @ts-nocheck
	import '../app.postcss';
	import { title } from '$lib/config';
	import readme from '../content/README.md';
</script>

<header class="bg-primary-300 mb-8 shadow-lg">
	<h1 class="text-4xl p-8">
		<a href="/" class="underline decoration-primary-600 hover:drop-shadow font-bold">
			{title}
		</a>
	</h1>
</header>

<div class="flex gap-10 mx-10">
	<nav>
		<svelte:component this={readme} />
	</nav>
	<slot />
</div>
