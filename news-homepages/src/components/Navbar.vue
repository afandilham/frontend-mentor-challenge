<template>
  <nav class="flex justify-between items-center">
    <img class="w-12 md:w-16" src="/img/logo.svg" alt="logo" />
    <button @click="toggleButton" class="block md:hidden outline-none">
      <img class="w-10" src="/img/icon-menu.svg" alt="icon-menu" />
    </button>
    <div
      class="fixed w-60 bg-offWhite h-full right-0 top-0 p-2 translate-x-[500px] transition-all z-20"
      :class="{ '!translate-x-0': isActive }">
      <button @click="toggleButton" class="fixed right-0 outline-none p-4">
        <img class="w-8" src="/img/icon-menu-close.svg" alt="icon-menu" />
      </button>
      <div class="flex flex-col mt-16 p-4 gap-5 font-semibold">
        <a href="#" class="text-sm">Home</a>
        <a href="#" class="text-sm">New</a>
        <a href="#" class="text-sm">Popular</a>
        <a href="#" class="text-sm">Trending</a>
        <a href="#" class="text-sm">Categories</a>
      </div>
    </div>
    <div
      @click="toggleButton"
      class="fixed inset-0 opacity-40 w-full h-full bg-veryDarkBlue transition-all"
      :class="{ hidden: !isActive }"></div>
    <ul class="hidden md:flex gap-11 capitalize items-center">
      <li>
        <a
          href="#"
          class="text-base font-medium hover:text-softOrange transition-colors"
          >Home</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-base font-medium hover:text-softOrange transition-colors"
          >New</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-base font-medium hover:text-softOrange transition-colors"
          >Popular</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-base font-medium hover:text-softOrange transition-colors"
          >Trending</a
        >
      </li>
      <li>
        <a href="#" class="text-lg hover:text-softOrange transition-colors"
          >Categories</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)

const toggleButton = () => {
  isActive.value = !isActive.value
  console.log(isActive.value)
}
</script>
