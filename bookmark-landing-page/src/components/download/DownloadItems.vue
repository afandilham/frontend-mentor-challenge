<template>
  <base-card>
    <img class="download-img" :src="img" :alt="name" />
    <div class="download-desc">
      <h3>Add to {{ name }}</h3>
      <span>Minimum version {{ version }}</span>
    </div>
    <img src="../../assets/img/bg-dots.svg" alt="divider">
    <base-button class="download-button" color="blue">Add & Install Extension</base-button>
  </base-card>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    version: {
      type: Number,
      required: true,
    },
  },
};
</script>