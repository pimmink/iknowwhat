<script type="ts">
    import type { Event } from './../types/Episode.ts';
    export let content: Event;
</script>

<div class="answerblock">
    <h3 class="question">{content.text}</h3>
    <div class="options">
        {#each content.answers as answer}
            <p class="option">
                <span class="code {content.correctAnswer == answer.code ? 'answer' : ''}">{answer.code}</span> <span class="optiontext">{answer.text}</span>
            </p>
        {/each}
        <!-- <div class="option answer"><span class="code">B</span> Worst</div> -->
        <!-- <div class="option"><span class="code">C</span> Bier</div> -->
    </div>
</div>