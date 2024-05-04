<script lang="ts">
	import everythingBagel from '$lib/images/everything_bagel-nobg.png';
</script>

<div class="flex flex-row justify-center items-center bg-surface h-screen">
	<div class="flex flex-col flex-none mr-16 w-1/3 space-y-2">
		<!-- Hero Text -->
		<div class="flex flex-row space-x-2">
			<h1 class="text-5xl font-bold text-left">Creating the <em>flavors</em> of tomorrow.</h1>
		</div>
		<div class="flex flex-row">
			<p class="text-xl text-left">
				At Bagel Industries, we believe that every bite of a bagel should be a moment of pure
				delight. That's why we've dedicated ourselves to creating the most delicious and innovative
				bagel products.
			</p>
		</div>
	</div>
	<div class="flex flex-col h-screen">
		<!-- Hero Image -->
		<img
			class="h-3/4 object-cover"
			src={everythingBagel}
			alt="Everything bagel from Bagel Industries"
			loading="lazy"
			width="300"
			height="300"
		/>
	</div>
</div>
