<template>
  <h2 class="overview-title">Overview - Today</h2>
  <div class="social-overview">
    <base-card class="social-overview__card" v-for="overview in overviews" :key="overview.id">
      <template #default>
        <overview-items
          :type="overview.type"
          :icon="overview.icon"
          :total="overview.total"
          :rate="overview.rate"
          :percentage="overview.percentage"
        >
        </overview-items>
      </template>
    </base-card>
  </div>
</template>

<script>
import OverviewItems from './OverviewItems.vue'; 

export default {
  components: {
    OverviewItems
  },
  inject: ['overviews']
}
</script>