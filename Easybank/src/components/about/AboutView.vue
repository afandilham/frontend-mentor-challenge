<template>
  <section id="about" class="about">
    <div class="wrapper">
      <h2 class="about-title">Why choose Easybank?</h2>
      <p class="about-desc">
        We leverage Open Banking to turn your bank account into your financial hub.
        Control your finances like never before.
      </p>
      <div class="about-features">
        <base-card class="about-card" v-for="about in features" :key="about.id">
          <template #default>
            <about-items
              :img="about.img"
              :title="about.title"
              :desc="about.desc"
            >
            </about-items>
          </template>
        </base-card>
      </div>
    </div>
  </section>
</template>

<script>
import iconOnline from "../../assets/img/icon-online.svg";
import iconBudgeting from "../../assets/img/icon-budgeting.svg";
import iconOnboarding from "../../assets/img/icon-onboarding.svg";
import iconApi from "../../assets/img/icon-api.svg";
import { nanoid } from "nanoid";

import AboutItems from './AboutItems.vue';

export default {
  components: {
    AboutItems
  },
  data() {
    return {
      features: [
        {
          id: nanoid(9),
          img: iconOnline,
          title: "Online Banking",
          desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        },
        {
          id: nanoid(9),
          img: iconBudgeting,
          title: "Simple Budgeting",
          desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        },
        {
          id: nanoid(9),
          img: iconOnboarding,
          title: "Fast Onboarding",
          desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        },
        {
          id: nanoid(9),
          img: iconApi,
          title: "Open API",
          desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        },
      ],
    };
  },
};
</script>
