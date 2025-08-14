<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import gsap from "gsap";
import BaseButton from "./BaseButton.vue";

defineProps<{
  navLinks: {
    name: string;
    href: string;
  }[];
}>();

const isOpen = ref(false);

function toggleNav() {
  isOpen.value = !isOpen.value;
}

function handleClick() {
  alert("Sign Up clicked!");
}

const menuRef = ref<HTMLElement | null>(null);
const linksRef = ref<HTMLAnchorElement[]>([]);

onMounted(() => {
  if (menuRef.value) {
    gsap.set(menuRef.value, {
      xPercent: 100,
    });
  }
});

watch(
  () => isOpen.value,
  (isOpen) => {
    if (!menuRef.value) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (isOpen) {
      tl.to(menuRef.value, {
        xPercent: 0,
        duration: 0.5,
      }).from(
        linksRef.value,
        {
          opacity: 0,
          y: 20,
          stagger: 0.05,
        },
        "-=0.3"
      );
    } else {
      tl.to(menuRef.value, {
        xPercent: 100,
        duration: 0.4,
      });
    }
  }
);
</script>

<template>
  <div>
    <!-- Hamburger -->
    <button
      @click="toggleNav"
      class="relative z-50 p-3 focus:outline-none cursor-pointer bg-primaryPurple-700"
    >
      <span
        :class="[
          'block w-6 h-0.5 bg-neutral-100 transition-all',
          isOpen ? 'rotate-45 translate-y-1.5' : '',
        ]"
      ></span>
      <span
        :class="['block w-6 h-0.5 bg-neutral-100 my-1 transition-all', isOpen ? 'opacity-0' : '']"
      ></span>
      <span
        :class="[
          'block w-6 h-0.5 bg-neutral-100 transition-all',
          isOpen ? '-rotate-45 -translate-y-1.5' : '',
        ]"
      ></span>
    </button>

    <!-- Menu -->
    <nav
      ref="menuRef"
      class="fixed top-0 right-0 w-64 h-full bg-black shadow-lg z-40 p-8 flex flex-col space-y-6 lg:hidden mt-20"
    >
      <a
        v-for="(link, i) in navLinks"
        :key="i"
        href="#"
        ref="el => linksRef[i] = el!"
        class="text-lg font-semibold hover:text-primaryPurple-600"
      >
        {{ link.name }}
      </a>
      <div class="mobile_btn">
        <button class="login_btn">Login</button>
        <BaseButton @click="handleClick">Sign Up</BaseButton>
      </div>
    </nav>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.mobile_btn {
  @apply flex flex-col;
}

.mobile_btn .login_btn {
  @apply bg-neutral-900 py-2 px-6 rounded-md cursor-pointer hover:bg-neutral-800 mb-2;
}
</style>
