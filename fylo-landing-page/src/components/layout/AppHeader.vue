<template>
  <header>
    <img
      class="header-illustration"
      src="/img/illustration-intro.png"
      alt="bg-intro"
    />
    <picture>
      <source
        class="header-curve"
        media="(max-width:375px)"
        srcset="/img/bg-curvy-mobile.svg"
        loading="eager"
      />
      <source
        class="header-curve"
        media="(min-width:1440px)"
        srcset="/img/bg-curvy-desktop.svg"
        loading="eager"
      />
      <img
        class="header-curve"
        src="/img/bg-curvy-desktop.svg"
        alt="header-desktop"
        loading="eager"
      />
    </picture>
    <div class="intro">
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <div class="header-action">
        <base-button>Get Started</base-button>
      </div>
    </div>
  </header>
</template>
