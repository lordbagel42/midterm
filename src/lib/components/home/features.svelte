<script lang="ts">
	import dualsesame from '$lib/images/dualsesame.png';
</script>

<div class="flex justify-center items-center bg-surface">
	<div class="flex flex-col flex-grow">
		<img class="mr-16" src={dualsesame} alt="" />
	</div>
	<div class="flex flex-col mt-16 w-1/2 h-screen">
		<h6 class="text-5xl">Discover the perfect bagel for you.</h6>
		<p class="font-medium text-2xl mt-16">
			Indulge in our freshly baked bagels made with the finest ingredients. Experience the perfect
			combination of chewy texture and delicious flavors.
		</p>
		<div class="flex flex-col flex-grow">
			<!-- Updated this line -->
			<div class="flex flex-row justify-start w-full mt-8">
				<div class="flex flex-col w-1/2 mr-4">
					<div class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-24 h-24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
							/>
						</svg>
					</div>
					<h2 class="text-left text-xl font-bold mt-2">Quality Bagels</h2>
					<p class="mt-8 text-base">
						Savor our wide selection of bagel flavors, from classic plain to unique specialty
						options.
					</p>
				</div>
				<div class="flex flex-col w-1/2">
					<div class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-24 h-24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
							/>
						</svg>
					</div>
					<h2 class="text-left text-xl font-bold mt-2">Amazing Staff</h2>
					<p class="mt-8 text-base">
						Our knowledgeable and welcoming staff will ensure you have a delightful bagel
						experience.
					</p>
				</div>
			</div>
			<div class="flex flex-row mt-16">
				<a
					class="btn btn-lg variant-filled-primary hover:bg-primary-400 duration-[500ms] mr-4"
					href="/discover">Discover Your Perfect Bagel</a
				>
				<a
					class="btn btn-lg variant-filled-primary hover:bg-primary-400 duration-[500ms] ml-4"
					href="/order">Order Now</a
				>
			</div>
		</div>
	</div>
</div>
