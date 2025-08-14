<script lang="ts" setup>
import PricingCard from "@/components/PricingCard.vue";
import TitleCom from "@/components/TitleCom.vue";
import { pricingCards } from "@/lib/constant";

import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleWrapperRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!titleWrapperRef.value) return;

  // Set initial visible state
  gsap.set(titleWrapperRef.value.querySelectorAll(".title, .subtitle"), {
    opacity: 1,
    y: 0,
  });

  // Animation setup
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: titleWrapperRef.value,
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  tl.from(titleWrapperRef.value.querySelectorAll(".title, .subtitle"), {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5,
    ease: "power2.out",
  });
});
</script>

<template>
  <section>
    <div ref="titleWrapperRef" class="pricing-container">
      <div class="fade-circle"></div>
      <TitleCom
        titleClass="text-[25px] md:text-[35px] lg:text-[45px] md:max-w-[350px] lg:max-w-[450px] md:mx-auto font-dmSans-bold"
        subtitleClass="text-[16px] md:max-w-[450px] mx-auto"
      >
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
        <div class="fade"></div>
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
  @apply relative flex flex-col justify-center gap-[20px] md:flex-row my-10;
}

.fade {
  @apply absolute ml-15 -top-35 md:ml-0 w-[420px] h-[400.89px] md:w-[604px] md:h-[556.89px] md:-top-65 bg-[#5000B5] rounded-full opacity-40 -z-10;
  /* background-color: var(--color-primaryPurple-700); */
  -webkit-filter: blur(80px);
  filter: blur(80px);
}
</style>
