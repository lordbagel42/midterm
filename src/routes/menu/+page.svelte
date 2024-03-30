<script>
    // Importing the bagel data JSON file
    import bagels from '$lib/bagelData.json';
</script>

<div class="flex flex-col items-center justify-center">
    {#each bagels as bagel}
        <div class="w-full max-w-screen-lg mx-auto mb-4 relative">
            <div class="bg-white shadow-md border border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row">
                <div class="sm:mr-4">
                    <!-- Bagel Image-->
                    <img class="w-full sm:w-96 h-96 object-cover rounded" src={bagel.image} alt={bagel.name} />
                </div>
                <div class="flex flex-col flex-grow">
                    <!-- Bagel Details -->
                    <h3 class="font-semibold text-lg">{bagel.name}</h3>
                    <p class="text-gray-600">{bagel.description}</p>
                    <!-- Bagel Qualities Table -->
                    <div class="mt-4">
                        <h4 class="font-semibold mb-2">Qualities:</h4>
                        <div class="grid grid-cols-2 gap-2">
                            {#each bagel.qualities.split(', ') as quality}
                                <div class="flex items-center">
                                    <svg class="w-4 h-4 fill-current text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4 10a6 6 0 1 1 12 0 6 6 0 0 1-12 0z"/></svg>
                                    <span>{quality}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
            <!-- Add To Cart Button -->
            <div class="absolute bottom-0 right-0 mb-4 mr-4">
                <button class="btn btn-sm bg-blue-500 text-white px-4 py-2 rounded">Add To Cart</button>
            </div>
        </div>
    {/each}
</div>
