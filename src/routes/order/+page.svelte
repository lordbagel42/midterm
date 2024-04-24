<script lang="ts">
	import bagels from '$lib/bagelData.json';
	import CartCard from '$lib/components/Cards/cartCard.svelte';
	import { Cart } from '$lib/cart/cart';

	let cartItems: { name: string; quantity: number }[] = []; // Assuming the local storage contains an array of objects with "name" and "quantity" properties
	Cart.subscribe((value) => {
		cartItems = value;
	});

	let bagelData: any[] = bagels;
	let displayItems: any[] = [];

	function findBagelByName(name: string) {
		return bagelData.find((bagel) => bagel.name === name);
	}

	function emptyCart() {
		Cart.set([]);
	}

	// This will re-calculate the displayItems whenever cartItems changes
	$: {
		displayItems = cartItems
			.map((item) => {
				let foundBagel = findBagelByName(item.name);
				if (foundBagel) {
					return {
						...foundBagel,
						quantity: item.quantity // Add quantity to the item data
					};
				}
				return null;
			})
			.filter(Boolean);
	}
</script>

<button on:click={emptyCart} class="btn btn-primary">Empty Cart</button>

<!-- Display the cart -->
<div class="flex justify-start mx-4">
    <div class="flex w-1/2">
        <div class="flex-col h-3/4">
            {#each displayItems as item}
                <!-- Pass both item and quantity to CartCard -->
                <CartCard {item} quantity={item.quantity} />
            {/each}
            <div class="flex justify-center items-center h-full">
                {#if displayItems.length === 0}
                    <div class="text-center">
                        <p class="text-lg text-gray-600 mb-4">Your cart is empty.</p>
                        <a href="/menu" class="btn btn-primary">Go to Menu</a>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
