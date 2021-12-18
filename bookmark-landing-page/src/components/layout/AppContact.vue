<template>
  <section class="contact">
    <div class="wrapper">
      <div class="contact-desc">
        <p class="contact-slogan">35,000+ already joined</p>
        <h2 class="contact-title">Stay up-to-date with what we're doing</h2>
      </div>
      <form class="contact-form" @submit.prevent="submitForm" novalidate="true">
        <div class="contact-control">
          <label for="email" hidden></label>
          <input
            :class="{ active: !formIsValid }"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            v-model.trim="email"
            @blur="clearValidity()"
          />
          <img
            v-if="!formIsValid"
            class="contact-icon"
            src="../../assets/img/icon-error.svg"
            alt="error"
          />
          <span v-if="!formIsValid" class="contact-error">
            Whoops, make sure it's an email
          </span>
        </div>
        <base-button color="red">Contact Us</base-button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      formIsValid: true,
    };
  },
  methods: {
    clearValidity() {
      this.formIsValid = true;
    },
    submitForm() {
      this.formIsValid = true;
      const emailValidation =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.email === "") {
        this.formIsValid = false;
        return;
      }

      if (!emailValidation.test(this.email)) {
        this.formIsValid = false;
        return;
      }
    },
  },
};
</script>
