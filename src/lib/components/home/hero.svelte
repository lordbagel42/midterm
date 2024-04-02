<script lang="ts">
	import everythingbagel from '$lib/images/everything_bagel-nobg.png';
</script>

<div class="flex flex-row justify-center items-center bg-surface h-screen">
	<div class="flex flex-col flex-none mr-16 w-1/3">
		<!-- Hero Text -->
		<div class="flex flex-row">
			<h1 class="text-5xl font-bold">Creating the <em>flavors</em> of tomorrow.</h1>
		</div>
		<div class="flex flex-row">
			<p class="text-xl">
				At Bagel Industries, we believe that every bite of a bagel should be a moment of pure
				delight. That's why we've dedicated ourselves to creating the most delicious and innovative
				bagel products.
			</p>
		</div>
	</div>
	<div class="flex flex-col h-screen">
		<!-- Hero Text -->
		<img class="h-3/4 object-cover" src={everythingbagel} alt="" />
	</div>
</div>
