<template>
  <picture>
    <source class="header-bg" alt="header desktop" media="(min-width:1440px)" :srcset="HeaderDesktop">
    <source class="header-bg" alt="header mobile" media="(max-width:375px)" :srcset="HeaderMobile">
    <img class="header-bg" :src="HeaderDesktop" sizes="" alt="header desktop">
  </picture>
  <JobFilter @search-filter="submitFilter" @clear-filter="clearFilter" :filtered-data="props.filteredData" />
</template>

<script setup>
import JobFilter from './JobFilter.vue';
import HeaderDesktop from '../assets/img/bg-header-desktop.svg';
import HeaderMobile from '../assets/img/bg-header-mobile.svg';

const props = defineProps({
  filteredData: {
    type: Array,
    required: true
  }
});

const emits = defineEmits(['searchFilter', 'clearFilter']);

const submitFilter = (value) => {
  emits('searchFilter', value);
}

const clearFilter = (value) => {
  emits('clearFilter', value);
}
</script>

<style lang="css" scoped>
.header-bg {
  width: 100%;
  background-color: hsl(180, 29%, 50%);
}
</style>