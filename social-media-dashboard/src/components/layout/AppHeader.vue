<template>
  <header class="header">
    <div class="header-title">
      <h1>Social Media Dashboard</h1>
      <span>Total Followers: 23.004</span>
    </div>
    <div class="header-theme">
      <dark-mode></dark-mode>
    </div>
  </header>
</template>

<script>
import DarkMode from '../ui/DarkMode.vue'

export default {
  components: {
    DarkMode
  }
}
</script>