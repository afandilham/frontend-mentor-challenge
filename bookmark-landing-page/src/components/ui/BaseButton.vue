<template>
  <button type="submit" class="button" :class="backgroundColor">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['color'],
  computed: {
    backgroundColor() {
      if (this.color === "blue") {
        return "color-blue";
      }
      if (this.color === "red") {
        return "color-red";
      }
      if (this.color === "gray") {
        return "color-gray";
      }
      if (this.color === "transparent") {
        return "color-transparent";
      }
    }
  }
}
</script>