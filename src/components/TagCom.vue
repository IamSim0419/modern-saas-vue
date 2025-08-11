<script lang="ts" setup></script>

<template>
  <div>
    <div class="tag">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.tag {
  @apply relative py-[10px] px-[20px] bg-black rounded-[50px] inline-block;
  color: var(--color-washedPurple-400);
}

.tag::before {
  content: "";
  border-radius: 50px;
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(to right, #6400c1, #2f00ff);
  margin: -1px;
  display: inline-block;
}
</style>
