<template>
  <div class="social-overview__type">
    <p>{{ type }}</p>
    <img :src="icon" :alt="type">
  </div>
  <div class="social-overview__count">
    <h3>{{ total }}</h3>
    <div class="social-overview__rate">
      <img :src="rate" :alt="type">
      <span>{{ percentage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'icon', 'total', 'rate', 'percentage']
}
</script>