<template>
  <div class="features-body">
    <div class="features-background">
      <slot name="background"></slot>
    </div>
    <div class="features-desc">
      <h2>
        <slot name="heading"></slot>
      </h2>
      <p class="features-paragraph">
        <slot name="paragraph"></slot>
      </p>
      <base-button color="blue">More Info</base-button>
    </div>
  </div>
</template>
