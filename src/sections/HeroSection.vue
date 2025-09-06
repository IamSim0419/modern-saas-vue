<script lang="ts" setup>
import TitleCom from "@/components/TitleCom.vue";

import BaseButton from "@/components/BaseButton.vue";
// import TagCom from "@/components/TagCom.vue";
</script>

<template>
  <section class="hero-container">
    <div class="hero-wrapper">
      <TitleCom
        titleClass="text-[45px] font-dmSans-bold leading-13 md:leading-15 md:text-[55px]  lg:text-[65px] md:max-w-[620px] lg:max-w-[800px]"
        subtitleClass="text-[16px] md:max-w-[620px] md:mx-auto"
      >
        <template #pill>✨ Your work space Perfected</template>

        <template #title>
          <h1 v-gsap="{ preset: 'slide-up', delay: 0.5 }">
            All-In-One Collaboration and Productivity Platform
          </h1></template
        >

        <template #subtitle>
          <p v-gsap="{ preset: 'slide-up', delay: 0.8 }">
            Experience all the benefits of our platform starting at just $12.99 per month. Select
            the plan that suits your needs and take your productivity to new heights.
          </p>
        </template>
      </TitleCom>

      <BaseButton
        button-class="mt-2 py-[12px] text-[33px] w-full md:w-fit md:px-[20px] md:py-[10px] md:text-[22px]"
        variant="secondary"
      >
        Get cypress Free
      </BaseButton>
    </div>
    <div class="hero-banner">
      <img src="../assets/images/app-banner.png" alt="" />
      <div class="banner-effect"></div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

.hero-container {
  @apply relative mt-20 md:mt-24;
}
.hero-wrapper {
  @apply flex flex-col items-center gap-6 px-[25px] md:px-[45px];
}

.hero-banner {
  @apply relative  md:mt-[-40px] lg:mt-[-140px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] sm:ml-0 ml-[-50px];
}

.banner-effect {
  @apply absolute bottom-0 top-[50%] bg-gradient-to-t dark:from-black left-0 right-0 z-10;
}
</style>
