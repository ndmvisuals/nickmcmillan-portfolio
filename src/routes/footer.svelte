<script lang="ts">
	import * as config from '$lib/config'
</script>

<!-- Footer -->
<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		padding-block: var(--size-3);
		/* border-top: 1px solid var(--border); */
	}

	p {
		color: var(--text-2);
		font-size: var(--font-size-0)
	}
</style>
