<script lang="ts">
    // Importing the bagel data JSON file
    import bagels from '$lib/bagelData.json';
    import MenuCard from '$lib/components/Cards/menuCard.svelte';
</script>

<div class="flex flex-col items-center justify-center">
    {#each bagels as item}
        <MenuCard {item} />
    {/each}
</div>