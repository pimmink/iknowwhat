<script lang="ts">
    import Answer from './components/Answer.svelte';

    export let name: string;

    type AnswerType = {
        correctAnswer: string;
        title: string;
    }

    const answers: Array<AnswerType> = [
        {correctAnswer: '4', title: 'Haha'},
    ];

</script>

<main>
    {#each answers as answer}
        <Answer answerTitle={answer.title}/>
    {/each}
    <div>
        <h1>{ name }</h1>
    </div>
    <label for="episodes">Which episode:</label>
    <select name="episodes" id="episodes">
        <option value="20211016">Episode</option>
    </select>
</main>

<style type="text/scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

  @mixin prefix($property, $value, $vendors: webkit moz ms o khtml, $default: true) {
    @if $vendors {
      @each $vendor in $vendors {
          #{"-" + $vendor + "-" + $property}: #{$value};
      }
    }
    @if $default {
        #{$property}: #{$value};
    }
  }

  $grey: #5E5E5E;
  $lightgrey: #F2F2F2;
  $orange: #ff5218;

  $gradientOrange: #ff793d, #f43e01;

  $font: 'Poppins', "Helvetica Neue", Helvetica, Arial, sans-serif;
  $fontBold: 600;
  $fontNormal: 400;

  :global(body) {
    background-color: $lightgrey;
    color: $grey;
  }
  main {
    text-align: center;
    padding: 0;
    max-width: 240px;
    margin: 0 auto;
    font-family:  $font;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: $fontBold;
  }

  h1 {
    color: $orange;
    background: -webkit-linear-gradient($gradientOrange);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4em;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

</style>
