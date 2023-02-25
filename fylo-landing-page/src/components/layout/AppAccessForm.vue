<template>
  <div class="footer-form">
    <h4>Get early access today</h4>
    <p>
      It only takes a minute to sign up and our free starter tier is extremely
      generous. If you have any questions, our support team would be happy to
      help you.
    </p>
    <form @submit.prevent="submitEmail" class="footer-action">
      <div class="form-control">
        <input
          type="text"
          name="email"
          placeholder="email@example.com"
          v-model="emailRef"
        />
        <span v-if="!isError">Please enter a valid email address</span>
      </div>
      <base-button>Get Started For Free</base-button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emailRef = ref("");
const isError = ref(true);

const submitEmail = () => {
  isError.value = true;
  const emailValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailValidation.test(emailRef.value)) {
    isError.value = false;
    return;
  }

  if (emailRef.value === "") {
    isError.value = false;
    return;
  }
};
</script>
