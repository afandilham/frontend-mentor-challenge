<template>
  <nav role="navigation" class="navigation">
    <a href="#" class="navigation-logo">
      <img src="../../assets/img/logo.svg" alt="Logo">
    </a>
    <div class="navigation-overlay" :class="{active: hidden}">
      <ul class="navigation-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div class="navigation-button">
      <base-button class="navigation-button">Request Invite</base-button>
    </div>
    <div class="hamburger-menu" @click="openMenu"></div>
  </nav>
</template>

<script>
import iconHamburger from '../../assets/img/icon-hamburger.svg';
import iconClose from '../../assets/img/icon-close.svg';

export default {
  data() {
    return {
      hidden: false
    }
  },
  methods: {
    openMenu() {
      document.querySelector('.hamburger-menu').style.background = `url(${iconHamburger}) no-repeat`;

      if (this.hidden === false) {
        document.querySelector('.hamburger-menu').style.background = `url(${iconClose}) no-repeat`;
        return this.hidden = true;
      } 
      
      if (this.hidden === true) {
        return this.hidden = false;
      }
    },
  },
  mounted() {
    document.querySelector('.hamburger-menu').style.background = `url(${iconHamburger}) no-repeat`;
  }
}
</script>

<style lang="scss" scoped>
.hamburger-menu {
  display: none;
}

@media only screen and (max-width: 800px) {
  .hamburger-menu {
    display: flex;
    align-items: center;
    height: 20px;
    width: 30px;
    border: none;
    padding: 0;
  }
}
</style>