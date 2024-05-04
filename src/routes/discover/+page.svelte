<script lang="ts">
  import { writable } from 'svelte/store';
  import bagels from '$lib/bagelData.json';
  import qualitiesData from '$lib/qualities.json';
  import MenuCard from '$lib/components/Cards/menuCard.svelte';

  type Bagel = {
    name: string;
    image: string;
    description: string;
    qualities: string[];
  };

  const bagelData: Bagel[] = bagels.map((bagel) => ({
    ...bagel,
    qualities: bagel.qualities.split(',').map((quality) => quality.trim())
  }));

  const { qualities } = qualitiesData;

  const questionVisibility = writable<boolean[]>(Array(qualities.length).fill(false));
  const quizStarted = writable(false);
  const yesQualities = writable<string[]>([]);
  const closestBagelName = writable<string | null>(null);
  const skipCount = writable(0);

  let currentQuestion = 0;
  let userResponses: boolean[] = [];
  let tabPressCount = 0;

  function findClosestMatch(likedQualities: string[]): string | null {
    let closestMatch: Bagel | null = null;
    let maxMatches = 0;

    bagelData.forEach((bagel) => {
      const bagelQualities = bagel.qualities;
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
      userResponses.push(answer);
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
    userResponses = [];
    questionVisibility.set(Array(qualities.length).fill(false));
    quizStarted.set(false);
    yesQualities.set([]);
  }

  function displayResults() {
    const likedQualities = qualities.filter((_, index) => userResponses[index]);
    yesQualities.set(likedQualities);
    const closestMatch = findClosestMatch(likedQualities);
    closestBagelName.set(closestMatch);
  }

  function skipQuestions(numQuestions: number) {
    for (let i = 0; i < numQuestions; i++) {
      handleAnswer(false);
    }
  }

  function skipQuestionsHandler() {
    skipQuestions(skipCount.get());
  }

  function handleTabPress(event: KeyboardEvent) {
    if (event.key === 'S') {
      tabPressCount++;
      if (tabPressCount === 3) {
        const skipSection = document.getElementById('skipSection');
        if (skipSection) {
          skipSection.classList.remove('hidden');
        }
      }
    } else {
      tabPressCount = 0;
    }
  }

  onMount(() => {
    questionVisibility.set(Array(qualities.length).fill(false));
    window.addEventListener('keydown', handleTabPress);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleTabPress);
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
  <button class="px-4 py-2 ml-4 bg-blue-500 text-white rounded" on:click={skipQuestionsHandler}>Skip</button>
</div>

<div class="justify-center text-center">
  <h1 class="text-9xl">Discover Your Perfect Bagel</h1>
  <p class="text-lg">
    We have compiled a list of the qualities of our bagels, answer a few questions and find your perfect match!
  </p>

  {#if !$quizStarted}
    <button
      class="px-6 py-3 mt-8 bg-blue-500 text-white rounded-lg"
      on:click={() => ($quizStarted = true)}
    >
      BEGIN
    </button>
  {:else}
    <div class="mt-8">
      <p class="text-lg mb-4">Question {currentQuestion + 1} / {qualities.length}</p>
      {#each $questionVisibility as visible, i}
        {#if visible}
          <div class="mb-4">
            <h2 class="text-4xl">Do you like {qualities[i]} bagels?</h2>
            <div class="flex justify-center mt-4">
              <button
                class="px-4 py-2 mr-4 bg-green-500 text-white rounded"
                on:click={() => handleAnswer(true)}
              >
                Yes
              </button>
              <button
                class="px-4 py-2 bg-red-500 text-white rounded"
                on:click={() => handleAnswer(false)}
              >
                No
              </button>
            </div>
          </div>
        {/if}
      {/each}
    </div>

    {#if currentQuestion + 1 >= qualities.length}
      {#if $closestBagelName}
        {#each bagelData as item}
          {#if item.name === $closestBagelName}
            <MenuCard {item} />
          {/if}
        {/each}
      {/if}
    {/if}

    <button class="px-6 py-3 mt-8 bg-blue-500 text-white rounded-lg" on:click={restartQuiz}>Restart</button>
  {/if}
</div>
