<script lang="ts" setup>
import BaseButton from "@/components/BaseButton.vue";

const navLinks = [
  {
    name: "Product",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Resources",
    href: "/",
  },
  {
    name: "Download",
    href: "/",
  },
];

function handleClick() {
  alert("Sign Up clicked!");
}
</script>

<template>
  <header>
    <div class="navbar">
      <div class="logo">
        <img height="30" width="120" src="@/assets/icons/cypress-logo.svg" alt="logo" />
      </div>
      <nav>
        <ul>
          <li v-for="link in navLinks" :key="link.name">
            <RouterLink :to="link.href">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
      <div>
        <BaseButton @click="handleClick">Sign Up</BaseButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
@reference 'tailwindcss';

header {
  @apply bg-gray-700 w-full py-[10px] px-[25px] md:px-[45px];
}

.navbar {
  @apply flex justify-between items-center;
}

.navbar .logo {
  @apply py-[10px];
}

nav {
  @apply hidden lg:flex rounded-[20px];
  border: 1px solid var(--color-neutral-10);
}

nav ul {
  @apply flex items-center rounded-3xl px-[24px] gap-[24px];
}

nav ul > li {
  @apply p-[10px] text-[16px];
}
</style>
