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

    <img src="../assets/images/hero-img.png" alt="" />
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

.hero-container img {
  @apply absolute left-30 w-[840.48px] h-[346.82px];
}
</style>
