<script lang="ts">
	let count = 0;
	const increment = () => count++;
	const reset = () => (count = 0);
</script>

<div>
	<p>Clicked {count} {count === 1 ? 'time' : 'times'}</p>
	<button on:click={increment} class="inc">Increment</button>
	<button on:click={reset}>Reset</button>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: center;
		align-items: center;
		border: 2px solid var(--border);
		border-radius: 2rem;
		height: 200px;
		width: 200px;
		margin: 10px;
	}

	div button {
		width: 120px;
	}

	div p {
		margin: 0px;
	}
	.inc {
		background-color: var(--brand);
		box-shadow: none;
		text-shadow: none;
		color: black;
	}
</style>
