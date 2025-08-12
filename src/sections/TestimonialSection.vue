<script lang="ts" setup>
import CardTestimonial from "@/components/CardTestimonial.vue";
import TitleCom from "@/components/TitleCom.vue";
</script>

<template>
  <section class="my-10">
    <div class="testimonial-wrapper">
      <TitleCom titleClass="text-[25px] md:text-[35px] lg:text-[45px]" subtitleClass="text-[16px] ">
        <template #pill>Testimonials</template>

        <template #title> The perfect plan for you</template>

        <template #subtitle>
          Join thousands of satisfied users who rely on our platform for their personal and
          professional productivity needs.
        </template>
      </TitleCom>
    </div>

    <CardTestimonial />
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

.testimonial-wrapper {
  @apply px-[25px] md:px-[45px];
}
</style>
