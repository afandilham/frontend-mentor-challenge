<template>
  <div class="card" :class="newList ? 'active' : ''">
    <slot name="profile"></slot>
  </div>
</template>

<script setup>
defineProps({
  newList: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    margin: 1em 0;
    padding: 1.5em 2em;
    width: 100%;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background-color: #fff;
  }
  
  .card.active {
    border-left: 4px solid var(--primary);
  }

  @media (max-width: 375px) {
    .card {
      padding: 1em;
      margin-top: 2.5em;
    }
  }
</style>