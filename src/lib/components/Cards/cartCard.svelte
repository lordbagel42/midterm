<script lang="ts">
	import { Cart } from '$lib/cart/cart';
	export let item: { image: string; name: string; description: string; qualities: string };
</script>

<div class="w-full max-w-screen-lg mx-auto mb-4 relative text-start">
	<div class="bg-surface shadow-md border border-gray-600 rounded-lg p-4 flex flex-col sm:flex-row">
		<div class="sm:mr-4 sm:w-full lg:w-1/3">
			<!-- Bagel Image Container -->
			<img class="w-1/3 h-1/3 object-cover rounded" src={item.image} alt={item.name} />
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
	<div class="absolute bottom-0 right-0 mb-4 mr-4">
		<button
			class="btn btn-sm bg-blue-500 px-4 py-2 rounded text-white"
			on:click={() => addToCart(item.name)}
		>
			Buy Now</button
		>
	</div>
</div>