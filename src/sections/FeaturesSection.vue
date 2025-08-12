<script lang="ts" setup>
import TitleCom from "@/components/TitleCom.vue";
</script>

<template>
  <section class="my-10">
    <div class="title-wrapper">
      <TitleCom titleClass="text-[25px] md:text-[35px] lg:text-[45px]" subtitleClass="text-[16px] ">
        <template #pill> Features </template>

        <template #title> Keep track of your meetings all in one place</template>

        <template #subtitle>
          Capture your ideas, thoughts, and meeting notes in a structured and organized manner.
        </template>
      </TitleCom>
    </div>

    <div class="app-calender">
      <img src="../assets/images/app-calendar.png" alt="Calendar app" />
      <div class="fade"></div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

.title-wrapper {
  @apply my-15 px-[25px] md:px-[45px];
}

.app-calender {
  @apply relative flex justify-center items-center;
}

.app-calender img {
  @apply relative -mt-4 ml-10 md:ml-0;
}

.app-calender .fade {
  @apply absolute ml-15 -top-35 md:ml-0 w-[420px] h-[400.89px] md:w-[604px] md:h-[556.89px] md:-top-45  rounded-full -z-10;
  background-color: var(--color-primaryPurple-700);
  opacity: 0.5;
  filter: blur(181.2px);
}
</style>
