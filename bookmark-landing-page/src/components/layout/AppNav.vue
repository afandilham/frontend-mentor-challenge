<template>
  <div class="nav">
    <a href="#" class="nav-home">
      <img src="../../assets/img/logo-bookmark.svg" alt="bookmark" />
    </a>
    <nav role="navigation">
      <ul class="nav-list">
        <li><a href="#features">Features</a></li>
        <li><a href="#Pricing">Pricing</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><base-button color="red">Login</base-button></li>
      </ul>
    </nav>
    <div class="hamburger-menu" v-if="!isExit" @click="openNav"></div>
    <nav-mobile v-if="isExit" @close="closeNav"></nav-mobile>
  </div>
</template>

<script>
import NavMobile from "./NavMobile.vue";

export default {
  components: {
    NavMobile,
  },
  data() {
    return {
      isExit: false,
    };
  },
  methods: {
    openNav() {
      this.isExit = true;
    },
    closeNav() {
      this.isExit = false;
    },
  },
};
</script>

<style lang="scss">
.hamburger-menu {
  background: url("../../assets/img/icon-hamburger.svg") no-repeat;
  display: none;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 30px;
  padding: 0;
  cursor: pointer;
}

@media only screen and (max-width: 1000px) {
  .hamburger-menu {
    display: block;
  }
}
</style>
