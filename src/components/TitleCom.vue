<script lang="ts" setup>
interface TitleProps {
  titleClass?: string;
  subtitleClass?: string;
}

const props = withDefaults(defineProps<TitleProps>(), {
  titleClass: "text-2xl  max-w-[405px]",
  subtitleClass: "text-[16px] max-w-[405px]",
});
</script>

<template>
  <div class="title-container">
    <!-- Pill Slot -->
    <article class="pill-wrapper">
      <div class="pill">
        <slot name="pill">Default Pill</slot>
      </div>
    </article>

    <!-- Title & Subheading -->
    <div v-if="$slots.subtitle" class="title-wrapper">
      <h2 :class="['title', props.titleClass]">
        <slot name="title">Default Title</slot>
      </h2>
      <p :class="['subtitle', props.subtitleClass]">
        <slot name="subtitle">Default Subheading</slot>
      </p>
    </div>

    <!-- Only Title -->
    <h1 v-else :class="['title-wrapper', titleClass]">
      <slot name="title">Default Title</slot>
    </h1>
  </div>
</template>

<style>
@reference 'tailwindcss';

.title-container {
  @apply flex flex-col md:max-w-[600px] lg:max-w-[650px]  mx-auto gap-8 justify-center items-start md:items-center;
}

.pill-wrapper {
  @apply rounded-full p-[1px] bg-gradient-to-r from-[#2F00FF] to-[#6400C1];
}

.pill {
  @apply rounded-full px-3 py-1 bg-black;
  color: var(--color-washedPurple-400);
}

.title-wrapper {
  @apply flex flex-col gap-y-2;
}

.title {
  @apply text-left font-bold md:text-center;
  color: var(--color-washedPurple-400);
}

.subtitle {
  @apply md:text-center;
  color: var(--color-washedPurple-700);
}
</style>

// Usage
<!-- <TitleSection
  titleSize="text-5xl sm:text-7xl"
  subheadingSize="text-xl sm:text-2xl"
>
  <template #pill>
    🚀 Featured Jobs
  </template>

  <template #title>
    Find Your Dream Career
  </template>

  <template #subheading>
    Explore thousands of opportunities from top companies worldwide.
  </template>
</TitleSection> -->
