<template>
  <img :src="img" :alt="title">
  <h3>{{ title }}</h3>
  <p>{{ desc }}</p>
</template>

<script>
export default {
  props: ['img', 'title', 'desc']
}
</script>