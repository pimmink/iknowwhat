<script lang="ts">
  import dayjs from 'dayjs';
	import Answer from './components/Answer.svelte';
	import * as decryptLib from './lib/decrypt.ts';
  import http from './lib/http.ts';

  import type { EpisodeType, EpisodeDataType } from './types/Episode.ts';

  let episodes: EpisodeType[] = [];

  let selectedEpisode: string = '';
  let episodeData: EpisodeDataType;

  async function fetchEpisode() {
    console.log(selectedEpisode);
    if (selectedEpisode !== '') {
      episodeData = (await http.get(`/${selectedEpisode}.json`)).data;
    }
  }

  async function getData() {
    episodes = (await http.get('/episodes.json')).data;

    console.log(episodes);
  }

  function parseTimestamp(timestamp: number): string {
    return dayjs(timestamp).format('DD MMMM YYYY HH:mm');
  }

  getData();
</script>

<main>
    <label for="episodes">Which episode:</label>
    <select name="episodes" id="episodes" bind:value={selectedEpisode} on:change="{() => fetchEpisode()}">
      <option value={null}>Selecteer</option>
      {#each episodes as episode}
        <option value={episode.episodeCode}>
          {parseTimestamp(episode.broadcastWindowStartDate)}
        </option>
      {/each}
    </select>
    <pre>
      {JSON.stringify(episodeData, null, 2)}
    </pre>
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
    background-image: url("/images/bg.svg");
    background-size: 82vw;
    background-repeat: no-repeat;
    background-position: center bottom;
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
