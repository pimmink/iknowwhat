<script lang="ts">
    import dayjs from 'dayjs';
    import Answer from './components/Answer.svelte';
    import http from './lib/http.ts';

    import type {EpisodeDataType, EpisodeType} from './types/Episode.ts';

    let episodes: EpisodeType[] = [];

    let selectedEpisode: string = '';
    let episodeData: EpisodeDataType = {};


    async function fetchEpisode(): Promise<void> {
        if (selectedEpisode !== '') {
            episodeData = (await http.get(`/${selectedEpisode}.json`)).data;
        } else {
            episodeData = {};
        }
    }

    async function getData(): Promise<void> {
        episodes = (await http.get('/episodes.json')).data;
    }

    function parseTimestamp(timestamp: number): string {
        return dayjs(timestamp).format('DD MMMM YYYY HH:mm');
    }

    getData();
</script>

<main>
    <h1>I know what.</h1>
    <label for="episodes">Which episode:</label>
    <select name="episodes" id="episodes" bind:value={selectedEpisode} on:change="{() => fetchEpisode()}">
        <option value={''}>Selecteer</option>
        {#each episodes as episode}
            <option value={episode.episodeCode}>
                {parseTimestamp(episode.broadcastWindowStartDate)}
            </option>
        {/each}
    </select>
    {#if episodeData.events}
        <div class="answerblocks">
            {#each episodeData.events as event}
                {#if event.type !== 'ROUND'}
                    <Answer content={event.content} type={event.type}></Answer>
                {/if}
            {/each}
        </div>
    {/if}
    <!-- <pre>
      {JSON.stringify(episodeData, null, 2)}
    </pre> -->
</main>

<style type="text/scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

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

  @mixin calc($property, $expression) {
      #{$property}: -moz-calc(#{$expression});
      #{$property}: -webkit-calc(#{$expression});
      #{$property}: calc(#{$expression});
  }

  @mixin media($size) {
    @if ($size == "xs") {
      @media only screen and (max-width: 480px) {
        @content;
      }
    } @else if ($size == "s") {
      @media only screen and (max-width: 768px) {
        @content;
      }
    } @else if ($size == "m") {
      @media only screen and (max-width: 980px) {
        @content;
      }
    } @else if ($size == "l") {
      @media only screen and (max-width: 1200px) {
        @content;
      }
    } @else if ($size == "xl") {
      @media only screen and (min-width: 1200px) {
        @content;
      }
    }
  }

  $black: #000;
  $grey: #5E5E5E;
  $lightgrey: #F2F2F2;
  $orange: #ff5218;
  $white: #FFF;
  $black: #000;

  $gradientOrange: #ff793d, #f43e01;

  $font: 'Poppins', "Helvetica Neue", Helvetica, Arial, sans-serif;
  $fontBold: 600;
  $fontNormal: 400;

  :global(body) {
    background-color: $lightgrey;
    background-image: url("/images/bg.svg");
    background-size: 82vw;
    background-repeat: no-repeat;
    background-position: center bottom;
    color: $grey;
    background-attachment: fixed;
  }

  main {
    text-align: center;
    padding: 0;
    max-width: 240px;
    margin: 0 auto;
    font-family: $font;
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

  :global(.answerblocks) {
    width: 100%;
    clear: both;
    display: block;
    max-width: 960px;
    position: relative;
    margin: 0 auto;
    padding: 0;


    :global(.answerblock) {
      float: left;
      display: block;
      margin: 0 0 50px 0;
      @include calc(width, '50% - 25px');
      background-color: rgba(255, 255, 255, 0.9);
      height: 250px;
      padding: 25px;
      box-sizing: border-box;
      border-radius: 15px;
      @include prefix(box-shadow, 0 0 15px 0 rgba($black, 0.21), webkit moz);


      :global(h3.question) {
        font-weight: 500;
        font-size: 18px;
        text-align: left;
        margin: 0 0 15px 0;
      }

      :global(.options) {
        width: 100%;

        :global(p.option) {
          display: flex;
          text-align: left;
          align-items: center;
          margin: 10px 0;

          :global(span.code) {
            width: 25px;
            height: 25px;
            background-color: #F2F2F2;
            border-radius: 100%;
            text-align: center;

            &.answer {
              background-color: $orange;
              color: $white;
            }
          }

          :global(.optiontext) {
            @include calc(width, '100% - 25px');
            padding-left: 25px;
          }
        }
      }

      &:nth-child(odd) {
        clear: left;
      }

      &:nth-child(even) {
        clear: right;
        float: right;
      }

      @include media('s') {
        width: 100%;
        &:nth-child(odd) {
          margin-left: unset;
        }
        &:nth-child(even) {
          margin-right: unset;
        }

      }
    }

    @include media('xl') {
      max-width: 1200px;
    }
    @include media('l') {
      max-width: 960px;
    }
    @include media('m') {
      max-width: 768px;
      padding: 0 10px;
    }
    @include media('s') {
      max-width: 480px;
      padding: 0 15px
    }
    @include media('xs') {
      width: 320px;
      padding: 0 15px;
    }
  }

</style>
