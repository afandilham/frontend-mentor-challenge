<template>
  <div class="dark-mode">
    <span class="mode-switch__title">Dark Mode</span>
    <label class="mode-switch">
      <input type="checkbox" name="mode" id="mode" @change="changeTheme" v-model="themeChecked">
      <div class="mode-switch__slider"></div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themeChecked: ''
    }
  },
  methods: {
    changeTheme() {
      if (!document.body.classList.contains('light-theme') && !this.themeChecked) {
        return;
      } else {
        document.body.classList.toggle('light-theme');
      }
    }
  },
  mounted() {
    this.changeTheme();
  }
}
</script>