<script>
	// Importing the bagel data JSON file
	import bagels from './bagelData.json';
</script>

<div class="flex flex-col items-center justify-center">
    {#each bagels as bagel}
        <div class="w-full max-w-screen-lg mx-auto mb-4">
            <div class="relative bg-white shadow-md border border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row">
                <div class="mb-4 sm:mr-4">
                    <!-- Bagel Image-->
                    <img class="w-full sm:w-96 h-96 object-cover rounded" src={bagel.image} alt={bagel.name} />
                </div>
                <div class="flex flex-col flex-grow">
                    <!-- Bagel Details -->
                    <h3 class="font-semibold text-lg">{bagel.name}</h3>
                    <p class="text-gray-600">{bagel.description}</p>
                    <div class="mt-4 sm:absolute sm:bottom-0 sm:right-0 sm:mb-4 sm:mr-4">
                        <!-- Add To Cart -->
                        <button class="btn btn-sm bg-blue-500 text-white px-4 py-2 rounded">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>

