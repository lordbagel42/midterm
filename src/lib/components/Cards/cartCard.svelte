<script lang="ts">
	import { Cart } from '$lib/cart/cart';
	export let item: { image: string; name: string; description: string; qualities: string };
	export let quantity: number;

	const decreaseQuantity = () => {
		// Update the store with the new item
		Cart.update((items) => {
			const index = items.findIndex((cartItem) => cartItem.name === item.name);
			if (index !== -1) {
				// If the item already exists in the cart and quantity > 1, decrement its quantity
				if (items[index].quantity > 1) {
					items[index].quantity -= 1;
					return [...items];
				} else {
					// If the quantity is 1, remove the item from the cart
					return items.filter((_, i) => i !== index);
				}
			} else {
				// Item not found in the cart, do nothing
				return items;
			}
		});
	};

	const increaseQuantity = () => {
		// Update the store with the new item
		Cart.update((items) => {
			const index = items.findIndex((cartItem) => cartItem.name === item.name);
			if (index !== -1) {
				// Increment the quantity of the item in the cart
				items[index].quantity += 1;
				return [...items];
			} else {
				// Item not found in the cart, do nothing
				return items;
			}
		});
	};


</script>

<div class="w-full max-w-screen-lg mx-auto mb-4 relative text-start">
	<div class="bg-surface shadow-md border border-gray-600 rounded-lg p-2 flex flex-col sm:flex-row">
		<div class="sm:mr-2 sm:w-full lg:w-1/3">
			<!-- Bagel Image Container -->
			<img class="w-full h-full object-cover rounded" src={item.image} alt={item.name} />
		</div>
		<div class="flex flex-col w-2/3">
			<!-- Bagel Details -->
			<h3 class="font-semibold text-md">{item.name}</h3>
			<p class="text-sm">{item.description}</p>
			<!-- Bagel Qualities Table -->
			<div class="mt-2">
				<h4 class="font-semibold mb-1 text-sm">Qualities:</h4>
				<div class="grid grid-cols-2 gap-1">
					{#each item.qualities.split(', ') as quality}
						<div class="flex items-center">
							<svg
								class="w-2 h-2 fill-current mr-1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4 10a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" />
							</svg>
							<span class="text-sm">{quality}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<!-- Quantity Selector -->
	<div class="absolute bottom-0 right-0 mb-2 mr-2 flex items-center">
		<button class="bg-gray-300 px-2 py-1 rounded-l" on:click={() => decreaseQuantity()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M15 10a1 1 0 0 1-2 0V6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4zM5 14a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2H5z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<input
			type="number"
			id="quantity"
			name="quantity"
			min="1"
			max="10"
			class="w-16 px-2 py-1 border text-center"
			bind:value={quantity}
		/>
		<button class="bg-gray-300 px-2 py-1 rounded-r" on:click={() => increaseQuantity()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M15 10a1 1 0 0 1-2 0V7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3zM5 14a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2H5z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</div>
