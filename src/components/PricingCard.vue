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
  <article class="card_wrapper">
    <img class="diamond-icon" src="../assets/icons/Diamond.svg" alt="Diamond icon" />
    <!-- Header -->
    <header>
      <h3 class="card_plan">{{ plan.planType }}</h3>
      <div class="mt-6">
        <span class="card_price">
          {{ typeof plan.price === "number" ? `$${plan.price}` : `$${plan.price}`
          }}<small v-if="typeof plan.price !== 'number'" class="text-neutral-8">/mo</small>
        </span>
        <p v-if="plan.description" class="card_description">{{ plan.description }}</p>
      </div>
    </header>

    <!-- CTA Button -->
    <div class="cta-btn">
      <BaseButton button-class="w-full py-[12px]">
        {{ plan.ctaText }}
      </BaseButton>
    </div>

    <!-- Features -->
    <ul class="card_feature">
      <li v-for="(feature, index) in plan.features" :key="index" class="">
        <svg
          class="w-5 h-5 text-primaryPurple-400 mr-2 flex-shrink-0"
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

.card_wrapper {
  @apply relative border border-[#2C3A6B] bg-black/40 rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col gap-6 px-[30px] py-[32px];
}

.diamond-icon {
  @apply absolute w-6 h-6 top-6 right-6;
}

.card_plan {
  @apply text-[35px];
  color: var(--color-neutral-4);
  font-family: var(--font-dmSans-bold);
}

.card_price {
  @apply text-3xl font-bold text-[28px];
}

.card_description {
  @apply text-3xl font-bold text-[13px] mt-2;
  color: var(--color-neutral-7);
}

.card_feature {
  @apply space-y-3 flex-grow;
}

.card_feature li {
  @apply flex items-start text-[13px];
  color: var(--color-neutral-6);
}
</style>
