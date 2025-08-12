<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { users } from "@/lib/constant";
import gsap from "gsap";

// Split testimonials evenly into two rows
const row1 = users.slice(0, Math.ceil(users.length / 2));
const row2 = users.slice(Math.ceil(users.length / 2));

const row1Ref = ref<HTMLDivElement | null>(null);
const row2Ref = ref<HTMLDivElement | null>(null);

onMounted(() => {
  // Row 1 → scroll left
  gsap.fromTo(
    row1Ref.value,
    {
      x: 0,
      duration: 20,
      repeat: -1,
      ease: "none",
    },
    {
      xPercent: -100,
      duration: 20,
      repeat: -1,
      ease: "none",
    }
  );

  // Row 2 → scroll right
  gsap.fromTo(
    row2Ref.value,
    {
      xPercent: -100,
      duration: 20,
      repeat: -1,
      ease: "none",
    },
    {
      xPercent: 0,
      duration: 20,
      repeat: -1,
      ease: "none",
    }
  );
});
</script>

<template>
  <section class="py-10 space-y-6 overflow-hidden">
    <!-- Row 1 -->
    <div class="flex gap-6 cursor-pointer" ref="row1Ref">
      <div
        v-for="(user, i) in [...row1, ...row1]"
        :key="`${user.name}-${i}`"
        class="bg-white rounded-lg shadow-md p-5 flex-shrink-0 w-72"
      >
        <div class="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="avatar"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <span class="font-semibold">{{ user.name }}</span>
            <small class="block text-gray-500">@client_name</small>
          </div>
        </div>
        <p class="mt-3 italic text-gray-700">
          {{ user.message }}
        </p>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="flex gap-6 cursor-pointer" ref="row2Ref">
      <div
        v-for="(user, i) in [...row2, ...row2]"
        :key="`${user.name}-${i}`"
        class="bg-white rounded-lg shadow-md p-5 flex-shrink-0 w-72"
      >
        <div class="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="avatar"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <span class="font-semibold">{{ user.name }}</span>
            <small class="block text-gray-500">@client_name</small>
          </div>
        </div>
        <p class="mt-3 italic text-gray-700">
          {{ user.message }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';
</style>
