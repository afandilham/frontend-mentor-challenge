<template>
  <div class="bg-veryDarkBlue text-offWhite py-8 px-4 md:px-7 mt-10 md:mt-10 lg:mt-0">
    <h2 class="text-4xl md:text-5xl font-semibold text-softOrange">New</h2>
    <ul>
      <li
        class="pt-8 border-item"
        v-for="article in articles"
        :key="article.title">
        <a
          href="#"
          class="text-lg md:text-2xl font-semibold hover:text-softOrange transition-colors"
          >{{ article.title }}</a
        >
        <p class="text-sm md:text-lg pt-2 text-grayishBlue">
          {{ article.desc }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Articles } from '../types/articles'

const articles: Articles[] = reactive([
  {
    title: 'Hydrogen VS Electric Cars',
    desc: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    desc: 'What are the possible adverse effects of on-demand on AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
])
</script>
