<script type="ts">
    import type { Event } from './../types/Episode.ts';
    export let content: Event;
    export let type: string;

    console.log(`ANSWER TYPE: ${type}`);

    let sortedAnswers = content.answers?.map((answer, i) => {
      if(type === 'PAIRS') {
        const correctAnswerData = content.answers
          .find(({ code }) => code === content.correctAnswer.split(',')[i]);
        const answerData = answer;
          answerData.text = `${answer.text} - ${correctAnswerData.match}`;
        return answerData;
      }
      if(type === 'ORDER') {
        const answerData = content.answers
          .find(({ code }) => code === content.correctAnswer.split(',')[i]);
        return answerData;
      }
      return answer;
    });
</script>

<div class="answerblock">
    <h3 class="question">{content.text}</h3>
    <div class="options">
        {#each sortedAnswers as answer}
            <p class="option">
                <span class="code {content.correctAnswer.includes(answer.code) ? 'answer' : ''}">
                    {answer.code}
                </span>
                <span class="optiontext">
                  {answer.text}
                </span>
            </p>
        {/each}
        <!-- <div class="option answer"><span class="code">B</span> Worst</div> -->
        <!-- <div class="option"><span class="code">C</span> Bier</div> -->
    </div>
</div>