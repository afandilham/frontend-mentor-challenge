<template>
  <div class="social-followers__username">
    <img :src="icon" :alt="username">
    <span>{{ username }}</span>
  </div>
  <div class="social-followers__count">
    <p>{{ totalFollowers }}</p>
    <span>{{ type }}</span>
  </div>
  <div class="social-followers__today">
    <img :src="rate" :alt="todayFollowers">
    <span>{{ todayFollowers }} Today</span>
  </div>
</template>

<script>
export default {
  props: ['icon', 'username', 'totalFollowers', 'type', 'rate', 'todayFollowers']
}
</script>