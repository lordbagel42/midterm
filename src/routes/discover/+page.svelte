<script lang="ts">
	import { writable } from 'svelte/store';
	import bagels from '$lib/bagelData.json';
	import qualitiesData from '$lib/qualities.json';
	import MenuCard from '$lib/components/Cards/menuCard.svelte';

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
				{#each bagels as item}
					{#if item.name === $closestBagelName}
						<MenuCard {item} />
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
