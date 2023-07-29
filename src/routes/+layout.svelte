<script>
	import '../app.css';
	import { title } from '$lib/config';
</script>

<header class="bg-primary-300 mb-4 shadow-lg">
	<h1 class="text-4xl p-8">
		<a href="/" class="underline decoration-primary-600 hover:drop-shadow font-bold">
			{title}
		</a>
	</h1>
</header>

<main class="m-8">
	<slot />
</main>
