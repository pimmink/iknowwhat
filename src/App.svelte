<script lang="ts">
	import Answer from './components/Answer.svelte';
	import * as decryptLib from './lib/decrypt.ts';

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

	const data = {
		data:"AFdFAGlScFcTM0wdFTsFdxM+FCYnEQw1dW81bXhKMTpnJR5qaiI6el1RMAt0A34gLz0UB3IBcG8JOG5DZUAcMVlPAiJFbV5nPyZmW1w7XTlObU1eeURYe3V5Oj44BzAje2ZAUlZ9bEhCWjoQcHIwGgBlcgdzADs6a3cxEAkLX2dLRRBAMA09UQQfQh0TeEwhdmdIc3hXeG0zB3Z7cQdoYCI2FAkEPykvGwRuTysDJxocUEMCbgpKeTQiIhpXWAAnHlkCE29Pa1YYBHUcAmpWOk8sHCc7Al5xODRzXG1LMXMuYUVdRGs0PUhbMAtiTzAyFjMMRDNHNSIuLnRBXWoPOwkQAkowDT1cBhVNPRFtWncbPxAmJxIPNWRzJz8kFX5zZ3NFRVIsIj1kZBsxJQ1mDRdjRQ9oCzs6a20iVFhUBTocI0UCc0hwXVRKE1VSelM8RGBSWnJUXEc2N3YtLl5wNGRuV15Ta1F7CQ58SmFEfR1BIlcDMwcpMjhzZhlSCFpiT00VUn0NPVoYBEYLEXpLPE5gcn56SVNkdXk1X0ZgDQNRRGtjc0tcPVY=",
		token:"CAMEGEoFBGgJAxt0CHoSCRsGcwYICA==",
	};

	console.log(JSON.parse(decryptLib.decrypt(data.token, data.data)));
</script>


<main>s
	{#each answers as answer}
		<Answer answerTitle={answer.title} />
	{/each}
    <div>
        <p>SASS is working!</p>
    </div>
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
