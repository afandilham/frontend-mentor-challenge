<template>
  <div class="wrapper">
    <section class="header">
        <div class="header-hero">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>
          <base-button>Request Invite</base-button>
        </div>
        <div class="header-background">
          <img src="../../assets/img/image-mockups.png" alt="mockups">
        </div>
    </section>
  </div>
</template>

<style lang="scss">
.header .header-background::before {
  position: absolute;
  top: 0;
  right: 80px;
  content: '';
  background: url('../../assets/img/bg-intro-desktop.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top -120px right -200px;
  width: 960px;
  height: 600px;
  z-index: -2;
}

@media only screen and (max-width: 1000px) {
  .header .header-background::before {
    width: 750px;
    height: 500px;
  }
}

@media only screen and (max-width: 800px) {
  .header .header-background::before {
    background: url('../../assets/img/bg-intro-mobile.svg') no-repeat;
    background-size: 100% 100%;
    background-position: top center;
    right: 0;
    width: 100%;
    height: 500px;
  }
}
</style>