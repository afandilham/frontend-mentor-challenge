<template>
  <JobHeader @searchFilter="searchFilter" @clear-filter="clearFilter" :filteredData="searchData" />
  <div class="container">
    <JobLists 
      v-for="(item, index) in filteredData"
      :key="index"
      :company="item.company"
      :logo="item.logo"
      :new="item.new"
      :featured="item.featured"
      :position="item.position"
      :role="item.role"
      :level="item.level"
      :postedAt="item.postedAt"
      :contract="item.contract"
      :location="item.location"
      :languages="item.languages"
      :tools="item.tools"
      @clickFilter="submitFilter"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from '@vue/runtime-core';
import JobLists from './components/JobLists.vue';
import JobHeader from './components/JobHeader.vue';
import data from './data/index';

const filteredData = ref([]);
const searchData = ref([]);

const submitFilter = (value) => {
  let elementExist = searchData.value.includes(value);
  if (!elementExist) {
    searchData.value.push(value);
  }
  filteredData.value = filteredData.value.filter(value => searchData.value.every(item => { 
    return value.languages.includes(item) || value.role.includes(item) || value.level.includes(item) || value.tools.includes(item);
  }));
};

const searchFilter = (value) => {
  searchData.value = searchData.value.filter(item => item !== value);
  filteredData.value = data.filter(item => searchData.value.every(search => {
    return item.languages.includes(search) || item.role.includes(search) || item.level.includes(search) || item.tools.includes(search);
  }));
};

const clearFilter = () => {
  searchData.value = [];
  filteredData.value = data;
};

onMounted(() => {
  filteredData.value = data;
});
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.2em;
  padding-top: 1em;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}


@media (max-width: 375px) {
  .container {
    padding-top: 1em;
  }
}
</style>
