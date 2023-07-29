<script>
	import '../app.css';
	import { title } from '$lib/config';
</script>

<header class="bg-purple-300 mb-4 shadow-lg">
	<h1 class="text-4xl p-8">
		<a href="/" class="underline decoration-orange-600">
			{title}
		</a>
	</h1>
</header>

<main class="m-8">
	<slot />
</main>
