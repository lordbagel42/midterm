<script lang="ts">
    import bagels from '$lib/bagelData.json';
    import CartCard from '$lib/components/Cards/cartCard.svelte';
    import { Cart } from '$lib/cart/cart';

    let cartItems: string[] = [];
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
        displayItems = cartItems.map((itemName) => {
            let foundBagel = findBagelByName(itemName);
            if (foundBagel) {
                return {
                    name: foundBagel.name,
                    description: foundBagel.description,
                    qualities: foundBagel.qualities,
                    image: foundBagel.image
                };
            }
            return null;
        }).filter(Boolean);
    }
</script>

<button on:click={emptyCart} class="btn btn-primary">Empty Cart</button>

<!-- Display the cart -->
<div class="flex justify-start mx-4">
    <div class="flex">
        <div class="flex-col">
            {#each displayItems as item}
                <CartCard {item} />
            {/each}
        </div>
    </div>
</div>
