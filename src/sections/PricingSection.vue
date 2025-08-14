<script lang="ts" setup>
import PricingCard from "@/components/PricingCard.vue";
import TitleCom from "@/components/TitleCom.vue";
import { pricingCards } from "@/lib/constant";
</script>

<template>
  <section>
    <div class="pricing-container">
      <div class="fade-circle"></div>
      <TitleCom titleClass="text-[25px] md:text-[35px] lg:text-[45px]" subtitleClass="text-[16px] ">
        <template #pill>Pricing</template>

        <template #title>Choose the perfect plan for you</template>

        <template #subtitle>
          Experience all the benefits of our platform starting at just $12.99 per month. Select the
          plan that suits your needs and take your productivity to new heights.
        </template>
      </TitleCom>
      <div class="pricing-cards">
        <PricingCard :plan="pricingCards[0]" />
        <PricingCard :plan="pricingCards[1]" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

.pricing-container {
  @apply px-[25px] md:px-[45px] mt-20 md:mt-30;
}

.pricing-cards {
  @apply flex flex-col justify-center gap-[20px] md:flex-row my-10;
}
</style>
