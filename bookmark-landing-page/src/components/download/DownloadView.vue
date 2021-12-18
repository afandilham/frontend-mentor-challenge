<template>
  <section id="download" class="download">
    <div class="wrapper">
      <base-description>
        <template #heading>Download the extension</template>
        <template #desc>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </template>
      </base-description>
      <div class="download-card">
        <download-items
          v-for="download in downloads"
          :key="download.name"
          :img="download.img"
          :name="download.name"
          :version="download.version"
        >
        </download-items>
      </div>
    </div>
  </section>
</template>

<script>
import DownloadItems from "./DownloadItems.vue";

import logoChrome from "../../assets/img/logo-chrome.svg";
import logoFirefox from "../../assets/img/logo-firefox.svg";
import logoOpera from "../../assets/img/logo-opera.svg";

export default {
  components: {
    DownloadItems,
  },
  data() {
    return {
      downloads: [
        {
          img: logoChrome,
          name: "Chrome",
          version: 62,
        },
        {
          img: logoFirefox,
          name: "Firefox",
          version: 55,
        },
        {
          img: logoOpera,
          name: "Opera",
          version: 46,
        },
      ],
    };
  },
};
</script>
