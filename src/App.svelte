<script lang="ts">
	import Answer from './components/Answer.svelte';

	export let name: string;

	type AnswerType = {
		correctAnswer: string;
		title: string;
	}

	const answers: Array<AnswerType> = [
		{ correctAnswer: '4', title: 'Haha' },
		{ correctAnswer: '5', title: 'Haha2' },
		{ correctAnswer: '6', title: 'Haha3' },
		{ correctAnswer: '7', title: 'Haha5' },
		{ correctAnswer: '8', title: 'Haha4' },
	];
</script>


<main>
	{#each answers as answer}
		<Answer answerTitle={answer.title} />
	{/each}
</main>

<style type="text/scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

    $color: red;

    h1 {
        color: $color;
    }

    div {
        background: green;

    > p {
        color: #fff;
    }
    }
</style>
<div>
    <p>SASS is working!</p>
</div>