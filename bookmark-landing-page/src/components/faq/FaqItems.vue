<template>
  <details class="faq-details">
    <summary class="faq-question">{{ question }}</summary>
    <p class="faq-answer">
      {{ answer }}
    </p>
  </details>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>

.faq-details[open] summary {
  color: #fa5757;
  transition: all .2s ease;

  &::after {
    content:url('../../assets/img/icon-arrow-2.svg');
    transform: rotate(180deg);
    transition: all .2s ease;
  }
}
.faq-question::after {
  content: url('../../assets/img/icon-arrow.svg');
  transition: all .2s ease;
}
</style>