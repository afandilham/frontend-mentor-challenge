<template>
  <section id="team" class="testimonial">
    <TestimonialList
      v-for="(item, index) in data"
      :key="index"
      :review="item.review"
      :img="item.img"
      :name="item.name"
      :position="item.position"
    />
  </section>
</template>

<script setup>
const data = [
  {
    review:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: "profile-1",
    name: "Satish Patel",
    position: "Founder & CEO, Huddle",
  },
  {
    review:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: "profile-2",
    name: "Bruce McKenzie",
    position: "Founder & CEO, Huddle",
  },
  {
    review:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: "profile-3",
    name: "Iva Boyd",
    position: "Founder & CEO, Huddle",
  },
];
</script>
