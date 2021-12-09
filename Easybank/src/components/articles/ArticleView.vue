<template>
  <section id="blog" class="article">
    <div class="wrapper">
      <h2 class="article-title">Latest Articles</h2>
      <div class="article-features">
        <base-card class="article-card" v-for="article in articles" :key="article.id">
          <article-items
            :img="article.img"
            :author="article.author"
            :title="article.title"
            :body="article.body"
          >
          </article-items>
        </base-card>
      </div>
    </div>
  </section>
</template>

<script>
import imgCurrency from '../../assets/img/image-currency.jpg';
import imgRestaurant from '../../assets/img/image-restaurant.jpg';
import imgPlane from '../../assets/img/image-plane.jpg';
import imgConfetti from '../../assets/img/image-confetti.jpg';
import { nanoid } from 'nanoid';

import ArticleItems from './ArticleItems.vue';

export default {
  components: {
    ArticleItems
  },
  data() {
    return {
      articles: [
        {
          id: nanoid(12),
          img: imgCurrency,
          author: 'Claire Robinson',
          title: 'Receive money in any currency with no fees',
          body: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
        },
        {
          id: nanoid(12),
          img: imgRestaurant,
          author: 'Wilson Hutton',
          title: 'Treat yourself without worrying about money',
          body: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
        },
        {
          id: nanoid(12),
          img: imgPlane,
          author: 'Wilson Hutton',
          title: 'Take your Easybank card wherever you go',
          body: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
        },
        {
          id: nanoid(12),
          img: imgConfetti,
          author: 'Claire Robinson',
          title: 'Our invite-only Beta accounts are now live!',
          body: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
        }
      ]
    }
  }
}
</script>