<script lang="ts" setup>
import AppNavbar from "@/sections/AppNavbar.vue";
import HeroSection from "@/sections/HeroSection.vue";
import PartnerSection from "@/sections/PartnersSection.vue";
import FeaturesSection from "@/sections/FeaturesSection.vue";
import TestimonialsSection from "@/sections/TestimonialSection.vue";
import PricingSection from "@/sections/PricingSection.vue";
</script>

<template>
  <div class="appLayout">
    <AppNavbar />
    <HeroSection />
    <PartnerSection />
    <FeaturesSection />
    <TestimonialsSection />
    <PricingSection />
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.appLayout {
  @apply overflow-hidden;
}
</style>
