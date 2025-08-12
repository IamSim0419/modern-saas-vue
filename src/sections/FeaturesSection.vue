<script lang="ts" setup>
import TitleCom from "@/components/TitleCom.vue";
</script>

<template>
  <section class="my-15 px-[25px] md:px-[45px]">
    <TitleCom titleSize="text-[25px] md:text-[35px] lg:text-[45px]" subtitleSize="text-[16px] ">
      <template #pill> Features </template>

      <template #title> Keep track of your meetings all in one place</template>

      <template #subtitle>
        Capture your ideas, thoughts, and meeting notes in a structured and organized manner.
      </template>
    </TitleCom>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';
</style>
