<template>
  <section id="features" class="feature">
    <FeatureList
      v-for="(item, index) in data"
      :key="index"
      :icon="item.icon"
      :title="item.title"
      :desc="item.desc"
    />
  </section>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const data = [
  {
    icon: "icon-access-anywhere",
    title: "Access your files, anywhere",
    desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    icon: "icon-security",
    title: "Security you can trust",
    desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    icon: "icon-collaboration",
    title: "Real-time collaboration",
    desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    icon: "icon-any-file",
    title: "Store any type of file",
    desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];
</script>
