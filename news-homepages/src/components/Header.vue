<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-x-6 mt-12">
    <div class="col-span-2">
      <img class="hidden md:block" src="/img/image-web-3-desktop.jpg" alt="img-web-3-desktop" />
      <img class="md:hidden sm:block" src="/img/image-web-3-mobile.jpg" alt="img-web-3-desktop" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[3.6em] mt-7">
        <h1 class="text-4xl lg:text-6xl font-extrabold">The Bright Future of Web 3.0?</h1>
        <div class="flex flex-col">
          <p class="text-sm md:text-lg pb-8 text-darkGrayishBlue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Button />
        </div>
      </div>
    </div>
    <Articles />
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import Articles from './Articles.vue'
</script>
