<script lang="ts">
	import { Cart } from '$lib/cart/cart';
	export let item: { image: string; name: string; description: string; qualities: string };

	let quantity = 1;

	const addToCart = (name: string, quantityToAdd: number) => {
		// Check if the item already exists in the cart
		const existingItemIndex = Cart.update((items) => {
			const index = items.findIndex((item) => item.name === name);
			if (index !== -1) {
				// If the item exists, update its quantity
				items[index].quantity += quantityToAdd;
			} else {
				// If the item doesn't exist, add it to the cart
				items.push({ name, quantity: quantityToAdd });
			}
			return items;
		});
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			quantity -= 1;
			updateQuantity();
		}
	};

	const increaseQuantity = () => {
		if (quantity < 10) {
			// Assuming maximum quantity is 10
			quantity += 1;
			updateQuantity();
		}
	};

	const updateQuantity = () => {
		const quantityInput = document.getElementById('quantity') as HTMLInputElement;
		if (quantityInput) {
			quantityInput.value = quantity.toString();
		}
	};
</script>

<div class="w-full max-w-screen-lg mx-auto mb-4 relative text-start">
	<div class="bg-surface shadow-md border border-gray-600 rounded-lg p-4 flex flex-col sm:flex-row">
		<div class="sm:mr-4 sm:w-full lg:w-1/3">
			<!-- Bagel Image Container -->
			<img class="w-full h-full object-cover rounded" src={item.image} alt={item.name} />
		</div>
		<div class="flex flex-col w-2/3">
			<!-- Bagel Details -->
			<h3 class="font-semibold text-lg">{item.name}</h3>
			<p class="">{item.description}</p>
			<!-- Bagel Qualities Table -->
			<div class="mt-4">
				<h4 class="font-semibold mb-2">Qualities:</h4>
				<div class="grid grid-cols-2 gap-2">
					{#each item.qualities.split(', ') as quality}
						<div class="flex items-center">
							<svg
								class="w-4 h-4 fill-current mr-2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4 10a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" />
							</svg>
							<span>{quality}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<!-- Add To Cart Button -->
	<div class="absolute bottom-0 right-0 mb-2 mr-4">
		<button
			class="btn btn-sm bg-blue-500 px-4 py-2 rounded text-white"
			on:click={() => addToCart(item.name, quantity)}
		>
			Add To Cart</button
		>
	</div>
	<!-- Quantity Selector -->
	<div class="absolute bottom-0 right-0 mb-12 mr-4 flex items-center">
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
