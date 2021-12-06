<template>
  <base-card class="social-followers">
    <template #default>
      <div class="social-followers__card" v-for="follower in followers" :key="follower.username">
        <follower-items
          :icon="follower.icon"
          :username="follower.username"
          :totalFollowers="follower.totalFollowers"
          :type="follower.type"
          :rate="follower.rate"
          :todayFollowers="follower.todayFollowers">
        </follower-items>
      </div>
    </template>
  </base-card>
</template>

<script>
import FollowerItems from './FollowerItems.vue';

export default {
  components: {
    FollowerItems
  },
  inject: ['followers']
}
</script>