<template>
  <div class="feature-list">
    <img :src="`/img/${props.icon}.svg`" :alt="props.title" />
    <h3>{{ props.title }}</h3>
    <p>{{ props.desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
</script>
