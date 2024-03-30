<script lang="ts">
	import { writable } from 'svelte/store';
	import bagels from '$lib/bagelData.json';
	import qualitiesData from '$lib/qualities.json';

	// Define types for bagel and qualities
	type Bagel = {
		name: string;
		image: string;
		description: string;
		qualities: string[];
	};

	// Extract bagel data
	const bagelData: Bagel[] = bagels.map((bagel) => ({
		...bagel,
		qualities: bagel.qualities.split(',')
	}));

	const { qualities } = qualitiesData;

	// Create a writable store to manage question visibility
	const questionVisibility = writable<boolean[]>([]);
	const quizStarted = writable(false); // Store to track if quiz has started
	const yesQualities = writable<string[]>([]); // Store to track liked qualities
	const closestBagelName = writable<string | null>(null);
	const skipCount = writable(0); // Store to track the number of questions to skip

	let currentQuestion = 0;
	let userResponses: boolean[] = [];
	let tabPressCount = 0; // Track the number of consecutive tab presses

	// Function to find the closest match
	function findClosestMatch(likedQualities: string[]): string | null {
		let closestMatch: Bagel | null = null;
		let maxMatches = 0;

		// Loop through each bagel
		bagelData.forEach((bagel) => {
			const bagelQualities = bagel.qualities.map((quality) => quality.trim()); // Already an array, just trim the qualities
			const matches = bagelQualities.filter((quality) => likedQualities.includes(quality)).length;
			if (matches > maxMatches) {
				closestMatch = bagel;
				maxMatches = matches;
			}
		});

		return closestMatch ? closestMatch.name : 'No match found';
	}

	function handleAnswer(answer: boolean) {
		questionVisibility.update((visibility) => {
			visibility[currentQuestion] = false;
			userResponses.push(answer); // Store user's response
			currentQuestion++;
			if (currentQuestion < qualities.length) {
				visibility[currentQuestion] = true;
			} else {
				displayResults();
			}
			return visibility;
		});
	}

	function restartQuiz() {
		currentQuestion = 0;
		userResponses = []; // Reset user responses
		const initialVisibility = Array(qualities.length).fill(false);
		initialVisibility[0] = true;
		questionVisibility.set(initialVisibility);
		quizStarted.set(false);
		yesQualities.set([]); // Reset yesQualities store
	}

	// Modify displayResults function to find closest match
	function displayResults() {
		const likedQualities = qualities.filter((_, index) => userResponses[index]);
		yesQualities.set(likedQualities); // Update yesQualities store with liked qualities

		// Find closest match
		const closestMatch = findClosestMatch(likedQualities);
		console.log(closestMatch);
		closestBagelName.set(closestMatch); // Update closestBagelName store with closest match
		console.log($closestBagelName);
	}

	function skipQuestions(numQuestions: number) {
		for (let i = 0; i < numQuestions; i++) {
			handleAnswer(false);
		}
	}

	function skipQuestionsHandler() {
		skipQuestions($skipCount);
	}

	function handleTabPress(event: KeyboardEvent) {
		if (event.key === 'S') {
			tabPressCount++;
			if (tabPressCount === 3) {
				// Show the Skip Questions section
				const skipSection = document.getElementById('skipSection');
				if (skipSection) {
					skipSection.classList.remove('hidden');
				}
			}
		} else {
			// Reset tabPressCount if a key other than Tab is pressed
			tabPressCount = 0;
		}
	}

	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';

	onMount(() => {
		// Initialize questionVisibility with the first question visible
		const initialVisibility = Array(qualities.length).fill(false);
		initialVisibility[0] = true;
		questionVisibility.set(initialVisibility);

		// Add event listener for keyboard events
		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', handleTabPress);
		}
	});

	onDestroy(() => {
		// Cleanup: remove event listener
		if (typeof window !== 'undefined') {
			window.removeEventListener('keydown', handleTabPress);
		}
	});
</script>

<div class="mb-4 hidden" id="skipSection">
	<label for="skipInput" class="text-xl">Skip Questions:</label>
	<input
		type="number"
		id="skipInput"
		min="1"
		max={qualities.length - currentQuestion}
		bind:value={$skipCount}
		class="px-4 py-2 border rounded"
	/>
	<button class="px-4 py-2 ml-4 bg-blue-500 text-white rounded" on:click={skipQuestionsHandler}
		>Skip</button
	>
</div>

<div class="justify-center text-center">
	<h1 class="text-9xl">Discover Your Perfect Bagel</h1>
	<p class="text-lg">
		We have compiled a list of the qualities of our bagels, answer a few questions and find your
		perfect match!
	</p>

	<!-- BEGIN Button -->
	{#if !$quizStarted}
		<button
			class="px-6 py-3 mt-8 bg-blue-500 text-white rounded-lg"
			on:click={() => ($quizStarted = true)}>BEGIN</button
		>
	{:else}
		<!-- Quiz Section -->
		<div class="mt-8">
			<!-- Current Question / Total Questions -->
			{#each $questionVisibility as visible, i}
				{#if visible}
					<p class="text-lg mb-4">Question {currentQuestion + 1} / {qualities.length}</p>
					<div class="mb-4">
						<h2 class="text-4xl">Do you like {qualities[i]} bagels?</h2>
						<div class="flex justify-center mt-4">
							<button
								class="px-4 py-2 mr-4 bg-green-500 text-white rounded"
								on:click={() => handleAnswer(true)}>Yes</button
							>
							<button
								class="px-4 py-2 bg-red-500 text-white rounded"
								on:click={() => handleAnswer(false)}>No</button
							>
						</div>
					</div>
				{/if}
			{/each}
		</div>

		<!-- Display Results -->
		{#if currentQuestion + 1 >= qualities.length}
			<!-- Display closest bagel information -->
			{#if $closestBagelName}
				{#each bagels as bagel}
					{#if bagel.name === $closestBagelName}
						<div class="w-full max-w-screen-lg mx-auto mb-4 relative">
							<h6 class="text-3xl">Your Perfect Bagel Is:</h6>
							<div
								class="bg-white shadow-md border border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row text"
							>
								<div class="sm:mr-4">
									<!-- Bagel Image-->
									<img
										class="w-full sm:w-96 h-96 object-cover rounded"
										src={bagel.image}
										alt={bagel.name}
									/>
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
													<svg
														class="w-4 h-4 fill-current text-gray-500 mr-2"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														><path
															d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4 10a6 6 0 1 1 12 0 6 6 0 0 1-12 0z"
														/></svg
													>
													<span>{quality}</span>
												</div>
											{/each}
										</div>
									</div>
								</div>
							</div>
							<!-- Add To Cart Button -->
							<div class="absolute bottom-0 right-0 mb-4 mr-4">
								<button class="btn btn-sm bg-blue-500 text-white px-4 py-2 rounded"
									>Add To Cart</button
								>
							</div>
						</div>
					{/if}
				{/each}
			{/if}
		{/if}

		<!-- Restart Button -->
		<button class="px-6 py-3 mt-8 bg-blue-500 text-white rounded-lg" on:click={restartQuiz}
			>Restart</button
		>
	{/if}
</div>
