<script lang="ts" setup>
import BaseButton from "@/components/BaseButton.vue";
import TagCom from "@/components/TagCom.vue";
</script>

<template>
  <div class="hero-container">
    <div class="hero-wrapper">
      <TagCom>✨ Your work space Perfected</TagCom>

      <h1>All-In-One Collaboration and Productivity Platform</h1>
      <BaseButton size="lg"> Get cypress Free </BaseButton>
    </div>
    <div class="hero-img">
      <img src="../assets/images/app-banner.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.hero-container {
  @apply relative;
}
.hero-wrapper {
  @apply flex flex-col gap-4 mt-20 py-[6px] px-[25px] md:py-[10px] md:px-[45px];
}

.hero-wrapper h1 {
  @apply max-w-[244px] text-[45px] lg:text-[65px] leading-[59px];
  color: var(--color-washedPurple-400);
  font-family: var(--font-dmSans-bold);
}

.hero-img {
  @apply relative  md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] sm:ml-0 ml-[-50px];
}

.hero-img img {
  @apply bg-cover relative;
}
</style>
