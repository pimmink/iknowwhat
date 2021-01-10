<script type="ts">
    import type { Event } from './../types/Episode.ts';
    export let content: Event;
</script>

<div class="answer">
    <h2 class="quote">{content.text}</h2>
    <div class="options">
        {#each content.answers as answer}
            <div class="option">
                <span class="code {content.correctAnswer == answer.code ? 'answer' : ''}">{answer.code}</span> {answer.text}
            </div>
        {/each}
        <!-- <div class="option answer"><span class="code">B</span> Worst</div> -->
        <!-- <div class="option"><span class="code">C</span> Bier</div> -->
    </div>
</div>