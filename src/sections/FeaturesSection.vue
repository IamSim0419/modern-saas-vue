<script lang="ts" setup>
import TitleCom from "@/components/TitleCom.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleWrapperRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!titleWrapperRef.value) return;

  // Set initial visible state
  gsap.set(titleWrapperRef.value.querySelectorAll(".title, .subtitle"), {
    opacity: 1,
    y: 0,
  });

  // Animation setup
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: titleWrapperRef.value,
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  tl.from(titleWrapperRef.value.querySelectorAll(".title, .subtitle"), {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5,
    ease: "power2.out",
  });
});
</script>

<template>
  <section>
    <div ref="titleWrapperRef" class="title-wrapper">
      <TitleCom
        titleClass="title text-[25px] md:text-[35px] lg:text-[45px] md:max-w-[460px] lg:max-w-[550px] md:mx-auto font-dmSans-bold"
        subtitleClass="subtitle text-[16px] md:max-w-[460px] mx-auto"
      >
        <template #pill> Features </template>

        <template #title> Keep track of your meetings all in one place </template>

        <template #subtitle>
          Capture your ideas, thoughts, and meeting notes in a structured and organized manner.
        </template>
      </TitleCom>
    </div>

    <div class="app-calender">
      <img src="../assets/images/app-calendar.png" alt="Calendar app" />
      <div class="fade"></div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

.title-wrapper {
  @apply px-[25px] md:px-[45px] mt-20 md:mt-30;
}

.app-calender {
  @apply relative flex justify-center items-center mt-15;
}

.app-calender img {
  @apply relative -mt-4 ml-10 md:ml-0;
}

.app-calender .fade {
  @apply absolute ml-15 -top-35 md:ml-0 w-[420px] h-[400.89px] md:w-[604px] md:h-[556.89px] md:-top-45 bg-[#5000B5] rounded-full opacity-40 -z-10;
  -webkit-filter: blur(80px);
  filter: blur(80px);
}

/* Remove initial hidden state - we'll handle this in GSAP */
</style>
