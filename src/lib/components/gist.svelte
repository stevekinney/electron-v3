<script lang="ts">
	export let src: string;
</script>

<aside class="bg-primary-100 border-primary-400 border-2 px-4 py-4">
	<ul class="list-none">
		<li>
			<span>🐙</span>
			<a href={src} target="_blank">View the current code as a Gist</a>.
		</li>
		<li>
			<span>🎻</span>
			<a href={src.replace('https', 'electron-fiddle')} target="_blank">Open in Electron Fiddle</a>.
		</li>
	</ul>
</aside>

<style lang="postcss">
	a {
		@apply underline decoration-primary-600 text-primary-900;
	}

	ul {
		@apply pl-0 w-full;
	}
</style>
