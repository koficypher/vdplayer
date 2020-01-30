<template>
  <div class="mx-auto">
    <video id="player" playsinline controls>
      <source src="../assets/Pidgin Imaginarium.mp4" type="video/mp4" />
      <!-- <source src="/path/to/video.webm" type="video/webm" /> -->

      <!-- Captions are optional -->
      <!-- <track
        kind="captions"
        label="English captions"
        src="/path/to/captions.vtt"
        srclang="en"
        default
      /> -->
    </video>
  </div>
</template>

<script>
import Plyr from "plyr";

export default {
  mounted: () => {
    new Plyr("#player", {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "pip",
        "airplay",
        "fullscreen"
      ],
      volume: 1
    });
  }
};
</script>

<style src="../../node_modules/plyr/dist/plyr.css" />
