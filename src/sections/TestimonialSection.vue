<script lang="ts" setup>
import CardTestimonial from "@/components/CardTestimonial.vue";
import TitleCom from "@/components/TitleCom.vue";
import { users } from "@/lib/constant";
</script>

<template>
  <section>
    <div class="testimonial-container">
      <TitleCom
        titleClass="text-[25px] md:text-[35px] lg:text-[45px] md:max-w-[330px] lg:max-w-[400px] md:mx-auto font-dmSans-bold"
        subtitleClass="text-[16px] md:max-w-[440px] mx-auto"
      >
        <template #pill>Testimonials</template>

        <template #title> The perfect plan for you</template>

        <template #subtitle>
          Join thousands of satisfied users who rely on our platform for their personal and
          professional productivity needs.
        </template>
      </TitleCom>
    </div>

    <CardTestimonial :users="users" />
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

.testimonial-container {
  @apply px-[25px] md:px-[45px] mt-20 md:mt-30;
}
</style>
