<template>
  <button @click="emits('clickFilter', props.role)">{{ props.role }}</button>
  <button @click="emits('clickFilter', props.level)">{{ props.level }}</button>
  <button v-for="(item, index) in props.tools" :key="index" @click="emits('clickFilter', item)">{{ item }}</button>
  <button v-for="(item, index) in props.languages" :key="index" @click="emits('clickFilter', item)">{{ item }}</button>
</template>

<script setup>
const props = defineProps({
  role: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  tools: {
    type: Array,
    required: true,
  },
  languages: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(['clickFilter']);
</script>

<style scoped>
  button {
    padding: .5em;
    margin: 0 .4em;
    background-color: var(--filter-light-grayish-cyan);
    color: var(--primary);
    font-weight: 700;
    font-size: .8rem;
    border: none;
    border-radius: 3px;
    outline: none;
    transition: all .1s ease;
  }

  button:hover {
    background-color: var(--primary);
    color: var(--filter-light-grayish-cyan);
    cursor: pointer;
  }

  @media (max-width: 375px) {
    button {
      margin: .4em .9em .2em 0;
    }
  }
</style>