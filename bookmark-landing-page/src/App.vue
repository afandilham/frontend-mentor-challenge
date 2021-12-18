<template>
  <app-nav></app-nav>
  <app-header></app-header>
  <main>
    <features-view></features-view>
    <download-view></download-view>
    <faq-view></faq-view>
    <app-contact></app-contact>
  </main>
  <app-footer></app-footer>
</template>

<script>
import AppNav from "./components/layout/AppNav.vue";
import AppHeader from "./components/layout/AppHeader.vue";
import FeaturesView from "./components/features/FeaturesView.vue";
import DownloadView from "./components/download/DownloadView.vue";
import FaqView from "./components/faq/FaqView.vue";
import AppContact from "./components/layout/AppContact.vue";
import AppFooter from "./components/layout/AppFooter.vue";

export default {
  components: {
    AppNav,
    AppHeader,
    FeaturesView,
    DownloadView,
    FaqView,
    AppContact,
    AppFooter,
  }
};
</script>
