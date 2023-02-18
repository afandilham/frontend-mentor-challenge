<template>
  <div class="filter" v-if="props.filteredData.length > 0">
    <div class="filter-left">
      <div class="filter-button" v-for="(item, index) in props.filteredData" :key="index">
        <span>{{ item }}</span>
        <button @click="emits('searchFilter', item)">X</button>
      </div>
    </div>
    <button class="filter-clear" @click="emits('clearFilter')">Clear</button>
  </div>
</template>

<script setup>
const props = defineProps({
  filteredData: {
    type: Array,
    required: true,
  }
});

const emits = defineEmits(['searchFilter', 'clearFilter']);
</script>

<style scoped>
  .filter {
    display: flex;
    justify-content: space-between;
    transform: translateY(-2.2em);
    max-width: 1000px;
    margin: 0 auto;
    background-color: #fff;
    padding: 1em 2em;
    border-radius: 5px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .filter-left {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .8em;
  }

  .filter-button > span{
    color: var(--primary);
    background-color: var(--bg-light-grayish-cyan);
    padding: .4em;
    border-radius: 5px 0 0 5px;
  }

  .filter-button > button {
    border: none;
    border-radius: 0 3px 3px 0;
    outline: none;
    padding: .6em;
    background-color: var(--primary);
    color: #fff;
    transition: all .1s ease;
    font-weight: 700;
  }

  .filter-button > button:hover {
    background-color: var(--black-grayish-cyan);
    cursor: pointer;
  }

  .filter-clear {
    cursor: pointer;
    text-decoration: underline;
    border: none;
    outline: none;
    color: var(--primary);
    background: none;
    font-weight: 700;
  }

  @media (max-width: 375px) {
    .filter {
      margin: 0 1em;
    }
  }
</style>