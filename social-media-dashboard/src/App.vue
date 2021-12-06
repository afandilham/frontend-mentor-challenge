<template>
  <app-header></app-header>
  <main class="container">
    <section class="social">
      <social-followers></social-followers>
      <social-overview></social-overview>
    </section>
  </main>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue';
import SocialFollowers from './components/social/SocialFollowers.vue';
import SocialOverview from './components/social/SocialOverview.vue';

import iconFacebook from './assets/img/icon-facebook.svg';
import iconTwitter from './assets/img/icon-twitter.svg';
import iconInstagram from './assets/img/icon-instagram.svg';
import iconYoutube from './assets/img/icon-youtube.svg';
import iconUp from './assets/img/icon-up.svg';
import iconDown from './assets/img/icon-down.svg';

export default {
  components: {
    AppHeader,
    SocialFollowers,
    SocialOverview
  },
  data() {
    return {
      followers: [
        {
          icon: iconFacebook,
          username: '@nathanf',
          totalFollowers: '1987',
          type: 'Followers',
          rate: iconUp,
          todayFollowers: 12
        },
        {
          icon: iconTwitter,
          username: '@nathanf',
          totalFollowers: '1044',
          type: 'Followers',
          rate: iconUp,
          todayFollowers: 99
        },
        {
          icon: iconInstagram,
          username: '@realnathanf',
          totalFollowers: '11K',
          type: 'Followers',
          rate: iconUp,
          todayFollowers: 99
        },
        {
          icon: iconYoutube,
          username: 'Nathan F.',
          totalFollowers: '8239',
          type: 'Subscribers',
          rate: iconDown,
          todayFollowers: 144
        },
      ],
      overview: [
        {
          type: 'Page Views',
          icon: iconFacebook,
          total: '87',
          percentage: '3%',
          rate: iconUp
        },
        {
          type: 'Likes',
          icon: iconFacebook,
          total: '52',
          percentage: '2%',
          rate: iconDown
        },
        {
          type: 'Likes',
          icon: iconInstagram,
          total: '5462',
          percentage: '2257%',
          rate: iconUp
        },
        {
          type: 'Profile Views',
          icon: iconInstagram,
          total: '52K',
          percentage: '1375%',
          rate: iconUp
        },
        {
          type: 'Retweets',
          icon: iconTwitter,
          total: '117',
          percentage: '303%',
          rate: iconUp
        },
        {
          type: 'Likes',
          icon: iconTwitter,
          total: '507',
          percentage: '553%',
          rate: iconUp
        },
        {
          type: 'Likes',
          icon: iconInstagram,
          total: '107',
          percentage: '19%',
          rate: iconDown
        },
        {
          type: 'Total Views',
          icon: iconInstagram,
          total: '1407',
          percentage: '12%',
          rate: iconDown
        },
      ]
    }
  },
  provide() {
    return {
      followers: this.followers,
      overviews: this.overview
    }
  }
}
</script>

<style>

</style>
