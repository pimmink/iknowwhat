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
    <div class="stats">
        <div class="statgroup age">
            <div class="agegroup" data-age="0-12">

            </div>
            <div class="agegroup" data-age="13-19"></div>
            <div class="agegroup" data-age="20-29"></div>
        </div>
        <div class="statgroup state">
            <div class="stategroup" data-state="ZH"></div>
            <div class="stategroup" data-state="GL"></div>
            <div class="stategroup" data-state="FL"></div>
        </div>
        <div class="statgroup gender">
            <div class="gendergroup" data-gender="female"></div>
            <div class="gendergroup" data-gender="male"></div>
            <div class="gendergroup" data-gender="shemale"></div>
        </div>
    </div>
</div>