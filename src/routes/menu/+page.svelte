<script>
    // Importing the bagel data JSON file
    import bagels from '$lib/bagelData.json';
    import MenuCard from '../menuCard.svelte';
</script>

<div class="flex flex-col items-center justify-center">
    {#each bagels as item}
        <MenuCard {item} />
    {/each}
</div>