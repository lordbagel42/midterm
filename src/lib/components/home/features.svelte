<script lang="ts">
  import Feature from './Feature.svelte';
  import DualSesame from './DualSesame.svelte';
</script>

<div class="flex justify-center items-center bg-surface">
  <div class="flex flex-col flex-grow">
    <DualSesame />
  </div>
  <div class="flex flex-col mt-16 w-1/2 h-screen">
    <h6 class="text-5xl">Discover the perfect bagel for you.</h6>
    <p class="font-medium text-2xl mt-16">
      Indulge in our freshly baked bagels made with the finest ingredients. Experience the perfect
      combination of chewy texture and delicious flavors.
    </p>
    <Feature
      title="Quality Bagels"
      description="Savor our wide selection of bagel flavors, from classic plain to unique specialty options."
      icon="quality"
    />
    <Feature
      title="Amazing Staff"
      description="Our knowledgeable and welcoming staff will ensure you have a delightful bagel experience."
      icon="staff"
    />
    <div class="flex flex-row mt-16">
      <button class="btn btn-lg variant-filled-primary hover:bg-primary-400 duration-[500ms] mr-4">
        Discover Your Perfect Bagel
      </button>
      <button class="btn btn-lg variant-filled-primary hover:bg-primary-400 duration-[500ms] ml-4">
        Order Now
      </button>
    </div>
  </div>
</div>

<style>
  .quality {
    background-image: url($dualsesame);
  }

  .staff {
    background-image: url(path/to/staff-image);
  }
</style>


<script lang="ts">
  export let title: string;
  export let description: string;
  export let icon: string;
</script>

<div class="flex flex-col w-1/2 mr-4">
  <div class="flex items-center">
    <div class="w-24 h-24 rounded-full bg-cover" style="background-image: url(/icons/{icon}.svg)"></div>
  </div>
  <h2 class="text-left text-xl font-bold mt-2">{title}</h2>
  <p class="mt-8 text-base">{description}</p>
</div>


<script lang="ts">
  import dualsesame from '$lib/images/dualsesame.png';
</script>

<div class="flex items-center">
  <img class="mr-16" src={dualsesame} alt="Dual Sesame" />
</div>
