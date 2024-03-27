<script>
	// Importing the bagel data JSON file
	import bagels from './bagelData.json';
</script>

<div class="flex flex-col items-center justify-center">
    {#each bagels as bagel}
        <div class="w-full max-w-screen-lg mx-auto mb-4">
            <div class="bg-white shadow-md border border-gray-300 rounded-lg p-4 flex"> <!-- Added items-center here -->
                <div class="mr-4">
                    <img class="w-96 h-96 object-cover rounded" src={bagel.image} alt={bagel.name} /> <!-- Adjusted width of the image -->
                </div>
                <div class="flex flex-col"> <!-- Added flex here -->
                    <h3 class="font-semibold text-lg">{bagel.name}</h3>
                    <p class="text-gray-600">{bagel.description}</p>
                </div>
            </div>
        </div>
    {/each}
</div>
