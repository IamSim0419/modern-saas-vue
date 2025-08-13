<script lang="ts" setup>
import BaseButton from "@/components/BaseButton.vue";
import TagCom from "@/components/TagCom.vue";
</script>

<template>
  <div class="hero-container">
    <div class="hero-wrapper">
      <TagCom>✨ Your work space Perfected</TagCom>

      <h1>All-In-One Collaboration and Productivity Platform</h1>
      <BaseButton button-class="px-[33.8px] py-[16.9px] text-[33px]"> Get cypress Free </BaseButton>
    </div>
    <div class="hero-banner">
      <img src="../assets/images/app-banner.png" alt="App banner" />
      <div class="banner-effect"></div>
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.hero-container {
  @apply relative mt-20;
}
.hero-wrapper {
  @apply flex flex-col gap-6  py-[6px] px-[25px] md:py-[10px] md:px-[45px];
}

.hero-wrapper h1 {
  @apply max-w-[244px] text-[45px] lg:text-[65px] leading-[55px] md:leading-[59px];
  color: var(--color-washedPurple-400);
  font-family: var(--font-dmSans-bold);
}

.hero-banner {
  @apply relative  md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] sm:ml-0 ml-[-50px];
}

.banner-effect {
  @apply absolute bottom-0 top-[50%] bg-gradient-to-t dark:from-black left-0 right-0 z-10;
}
</style>
