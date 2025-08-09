<script setup lang="ts"></script>

<template>
  <div class="min-h-screen">
    <h1
      v-gsap="{ preset: 'slide-up' }"
      class="font-dmSans-bold text-h1-desktop bg-washedPurple-700 text-center"
    >
      You did it!
    </h1>

    <h1 class="font-dmSans-medium text-h1-desktop bg-washedPurple-500 text-center">You did it!</h1>

    <h1 class="font-dmSans-regular text-h1-desktop bg-washedPurple-500 text-center">You did it!</h1>
  </div>
</template>

<style scoped>
/* No @theme here; it's in style.css */
</style>
