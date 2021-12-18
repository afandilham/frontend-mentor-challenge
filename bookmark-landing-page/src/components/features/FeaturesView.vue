<template>
  <section class="features">
    <div class="wrapper">
      <base-description>
        <template #heading>Features</template>
        <template #desc>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </template>
      </base-description>
      <div class="features-tab">
        <button
          @click="selectedComponents('features-bookmarking')"
          :class="{ active: activeBookmarking }"
        >
          Simple BookMarking
        </button>
        <button
          @click="selectedComponents('features-searching')"
          :class="{ active: activeSearching }"
        >
          Speedy Searching
        </button>
        <button
          @click="selectedComponents('features-sharing')"
          :class="{ active: activeSharing }"
        >
          Easy Sharing
        </button>
      </div>
      <keep-alive>
        <transition name="fade" mode="out-in">
          <component :is="selectedFeatures"></component>
        </transition>
      </keep-alive>
    </div>
  </section>
</template>

<script>
import FeaturesBookmarking from "./FeaturesBookmarking.vue";
import FeaturesSearching from "./FeaturesSearching.vue";
import FeaturesSharing from "./FeaturesSharing.vue";

export default {
  components: {
    FeaturesBookmarking,
    FeaturesSearching,
    FeaturesSharing,
  },
  data() {
    return {
      selectedFeatures: "features-bookmarking",
      activeBookmarking: true,
      activeSearching: false,
      activeSharing: false,
    };
  },
  methods: {
    selectedComponents(cmp) {
      if (cmp === "features-bookmarking") {
        this.activeBookmarking = true;
        this.activeSearching = false;
        this.activeSharing = false;
      }

      if (cmp === "features-sharing") {
        this.activeBookmarking = false;
        this.activeSearching = false;
        this.activeSharing = true;
      }

      if (cmp === "features-searching") {
        this.activeBookmarking = false;
        this.activeSearching = true;
        this.activeSharing = false;
      }
      this.selectedFeatures = cmp;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
