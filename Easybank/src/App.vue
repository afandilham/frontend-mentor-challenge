<template>
  <app-navigation></app-navigation>
  <app-header></app-header>
  <about-view></about-view>
  <article-view></article-view>
  <app-footer></app-footer>
</template>

<script>
import AppNavigation from './components/layout/AppNavigation.vue';
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
import AboutView from './components/about/AboutView.vue';
import ArticleView from './components/articles/ArticleView.vue';

export default {
  components: {
    AppNavigation,
    AppHeader,
    AppFooter,
    AboutView,
    ArticleView
  }
}
</script>