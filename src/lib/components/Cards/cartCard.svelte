<script lang="ts">
	import { Cart } from '$lib/cart/cart';
	export let item: { image: string; name: string; description: string; qualities: string };
	
	export const addToCart = (name: string) => {
		// Update the store with the new item
		Cart.update((items) => [...items, name]);
	};
</script>

<div class="max-w-md mx-auto mb-4 relative text-start">
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
	<!-- Add To Cart Button -->
	<div class="absolute bottom-0 right-0 mb-2 mr-2">
		<button
			class="btn btn-sm bg-blue-500 px-2 py-1 rounded text-white text-sm"
			on:click={() => addToCart(item.name)}
		>
			Buy Now</button
		>
	</div>
</div>