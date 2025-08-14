<script lang="ts" setup>
import BaseButton from "@/components/BaseButton.vue";
import MobileNav from "@/components/MobileNav.vue";
import { navLinks } from "@/lib/constant";

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
      <div class="desktop_btn">
        <button class="login_btn">Login</button>
        <BaseButton @click="handleClick">Sign Up</BaseButton>
      </div>

      <div class="mobile_icon">
        <MobileNav :nav-links="navLinks" />
      </div>
    </div>
  </header>
</template>

<style scoped>
@reference 'tailwindcss';

header {
  @apply w-full py-[6px] px-[25px] md:py-[10px] md:px-[45px];
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

.desktop_btn {
  @apply hidden md:block;
}

.desktop_btn .login_btn {
  @apply bg-neutral-900 py-2 px-6 mr-2 rounded-md cursor-pointer hover:bg-neutral-800;
}

.mobile_icon {
  @apply md:hidden;
}
</style>
