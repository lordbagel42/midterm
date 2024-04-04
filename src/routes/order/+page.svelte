<script lang="ts">
	import bagels from '$lib/bagelData.json';
	import CartCard from '$lib/components/Cards/cartCard.svelte';
    import { Cart } from '$lib/cart/cart';

    let cartItems: any[] = [];
	Cart.subscribe(value => {
        cartItems = value;
    });

	let bagelData: any[] = bagels;
	let displayItems: any[] = [];

	cartItems.forEach(item => {
		let foundBagel = bagelData.find(bagel => bagel.id === item.id);
		if (foundBagel) {
			displayItems.push({
				name: foundBagel.name,
				description: foundBagel.description,
				qualities: foundBagel.qualities,
				image: foundBagel.image
			});
		}
	});

</script>
  
<!-- Display the cart -->
<div class="flex flex-col items-center justify-center">
    {#each displayItems as item}
        <CartCard {item} />
    {/each}
</div>