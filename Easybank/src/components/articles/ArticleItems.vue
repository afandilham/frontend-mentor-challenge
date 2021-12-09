<template>
  <img :src="img" :alt="author">
  <span>By {{ author }}</span>
  <a href="#">{{ title }}</a>
  <p>{{ body }}</p>
</template>

<script>
export default {
  props: ['img', 'author', 'title', 'body']
}
</script>