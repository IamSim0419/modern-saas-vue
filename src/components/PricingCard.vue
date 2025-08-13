<script lang="ts" setup>
import BaseButton from "./BaseButton.vue";

interface PlanFeature {
  text: string;
  included?: boolean; // Made optional with default true
}

interface PricingPlan {
  planType: string;
  price: number | string;
  description?: string;
  highlightFeature?: string;

  features: PlanFeature[];
  ctaText?: string;
}

defineProps<{
  plan: PricingPlan;
}>();
</script>

<template>
  <article
    class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
  >
    <!-- Header -->
    <header class="p-6 text-white">
      <h3 class="text-xl font-bold">{{ plan.planType }}</h3>
      <div class="mt-4">
        <span class="text-3xl font-bold">
          {{ typeof plan.price === "number" ? `$${plan.price}` : `$${plan.price}` }}
        </span>
        <p v-if="plan.description" class="mt-2 text-sm opacity-90">{{ plan.description }}</p>
      </div>
    </header>

    <!-- CTA Button -->
    <div class="px-6 pb-6">
      <BaseButton button-class="w-full py-[12px]">
        {{ plan.ctaText }}
      </BaseButton>
    </div>

    <!-- Features -->
    <ul class="p-6 space-y-3 flex-grow">
      <li v-for="(feature, index) in plan.features" :key="index" class="flex items-start">
        <svg
          class="w-5 h-5 text-purple-500 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <span>{{ feature.text }}</span>
      </li>
    </ul>
  </article>
</template>

<style scoped>
@reference 'tailwindcss';
</style>
