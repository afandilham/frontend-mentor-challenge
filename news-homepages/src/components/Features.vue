<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 mt-20">
    <div class="flex gap-5" v-for="feature in features" :key="feature.id">
      <img class="w-24" :src="feature.img" :alt="feature.title" />
      <div class="flex flex-col gap-1">
        <h3 class="text-3xl text-grayishBlue font-semibold">
          {{ feature.id }}
        </h3>
        <a
          href="#"
          class="text-veryDarkBlue text-sm md:text-lg font-black hover:text-softRed transition-colors"
          >{{ feature.title }}</a
        >
        <p class="text-sm md:text-lg text-darkGrayishBlue">{{ feature.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Articles } from '../types/articles'

const features: Articles[] = reactive([
  {
    id: '01',
    img: '/img/image-retro-pcs.jpg',
    title: 'Reviving Retro PCs',
    desc: 'What happens when old PCs are given modern upgrades?',
  },
  {
    id: '02',
    img: '/img/image-top-laptops.jpg',
    title: 'Top 10 Laptops of 2022',
    desc: 'Our best picks for various needs and budgets.',
  },
  {
    id: '03',
    img: '/img/image-gaming-growth.jpg',
    title: 'The Growth of Gaming',
    desc: 'How the pandemic has sparked fresh opportunities.',
  },
])
</script>
