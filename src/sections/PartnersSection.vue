<script lang="ts" setup>
import Catalog from "@/assets/icons/Catalog.svg";
import Circooles from "@/assets/icons/Circooles.svg";
import Quotient from "@/assets/icons/Quotient.svg";
import Sisyphus from "@/assets/icons/Sisyphus.svg";
import { ref, onMounted } from "vue";
import gsap from "gsap";

// Infinite loop / Marquee slider component.
const partners = [
  {
    logo: Catalog,
    alt: "Partner1",
  },
  {
    logo: Circooles,
    alt: "Partner2",
  },
  {
    logo: Quotient,
    alt: "Partner 3",
  },
  {
    logo: Sisyphus,
    alt: "Partner 4",
  },
];

const wrapperRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  gsap.fromTo(
    wrapperRef.value,
    {
      x: 0,
    },
    {
      x: "-100%",
      duration: 20,
      ease: "none",
      repeat: -1,
    }
  );
});
</script>

<template>
  <section class="partners">
    <div class="fade">
      <div ref="wrapperRef" v-for="arr in 2" :key="arr" class="wrapper animate-slide">
        <div v-for="partner in partners" :key="partner.alt" class="partners-logo">
          <img :src="partner.logo" :alt="partner.alt" width="150" class="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

.partners {
  @apply relative;
}

.fade {
  @apply overflow-hidden flex relative after:content-[''] after:bg-gradient-to-l after:from-black after:to-transparent  after:right-0 after:bottom-0 after:top-0 after:w-20 after:z-10 after:absolute before:content-[''] before:bg-gradient-to-r before:from-black before:to-transparent  before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:absolute;
}

.wrapper {
  @apply flex flex-nowrap;
}

.partners-logo {
  @apply relative w-[200px] m-10 shrink-0 flex items-center;
}

.wrapper img {
  @apply object-contain max-w-none;
}
/* Example marquee animation */
/* @keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-slide {
  animation: slide 20s linear infinite;
} */
</style>
