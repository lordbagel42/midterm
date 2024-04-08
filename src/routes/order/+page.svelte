<script lang="ts">
	import bagels from '$lib/bagelData.json';
	import CartCard from '$lib/components/Cards/cartCard.svelte';
	import { Cart } from '$lib/cart/cart';
	let cartItems: any[] = [];
	Cart.subscribe((value) => {
		cartItems = value;
	});
	let bagelData: any[] = bagels;
	let displayItems: any[] = [];
	cartItems.forEach((item) => {
		let foundBagel = bagelData.find((bagel) => bagel.id === item.id);
		if (foundBagel) {
			displayItems.push({
				name: foundBagel.name,
				description: foundBagel.description,
				qualities: foundBagel.qualities,
				image: foundBagel.image
			});
		}
	});

	function emptyCart() {
		Cart.set([]);
	}

	// This will re-calculate the displayItems whenever cartItems changes
	$: {
		displayItems = [];
		cartItems.forEach((item) => {
			let foundBagel = bagelData.find((bagel) => bagel.id === item.id);
			if (foundBagel) {
				displayItems.push({
					name: foundBagel.name,
					description: foundBagel.description,
					qualities: foundBagel.qualities,
					image: foundBagel.image
				});
			}
		});
	}
</script>

<button on:click={emptyCart} class="btn btn-primary">Empty Cart</button>

<!-- Display the cart -->
<div class="flex justify-between">
	<div class="flex-col w-1/2 mx-8">
		<h2 class="text-4xl font-semibold">Order</h2>
	</div>
	<div>
		<div class="flex">
			<div>
				{#each displayItems as item}
					{#if item.id % 2 !== 0}
						<CartCard {item} />
					{/if}
				{/each}
			</div>
			<div>
				{#each displayItems as item}
					{#if item.id % 2 === 0}
						<CartCard {item} />
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
