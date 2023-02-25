<template>
  <testimonial-card>
    <p>{{ props.review }}</p>
    <div class="testimonial-profile">
      <img :src="`/img/${props.img}.jpg`" :alt="props.title" />
      <div>
        <h4>{{ props.name }}</h4>
        <span>{{ props.position }}</span>
      </div>
    </div>
  </testimonial-card>
</template>

<script setup>
const props = defineProps({
  review: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});
</script>
