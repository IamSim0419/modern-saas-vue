<script lang="ts" setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const props = defineProps<{
  users: { name: string; message: string }[];
}>();

// Split testimonials into two rows
const row1 = props.users.slice(0, Math.ceil(props.users.length / 2));
const row2 = props.users.slice(Math.ceil(props.users.length / 2));

const row1Ref = ref<HTMLDivElement | null>(null);
const row2Ref = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (row1Ref.value) {
    const distance = row1Ref.value.scrollWidth / 2;

    gsap.to(row1Ref.value, {
      x: -distance,
      duration: 60,
      ease: "none",
      repeat: -1,
    });
  }

  if (row2Ref.value) {
    const distance = row2Ref.value.scrollWidth / 2;

    gsap.fromTo(
      row2Ref.value,
      {
        x: -distance,
      },
      {
        x: 0,
        duration: 60,
        ease: "none",
        repeat: -1,
      }
    );
  }
});
</script>

<template>
  <section class="py-12 md:py-16 flex flex-col gap-4 overflow-hidden">
    <!-- Row 1 -->
    <div ref="row1Ref" class="flex gap-6">
      <article
        v-for="(user, i) in [...row1, ...row1]"
        :key="`${user.name}-row1-${i}`"
        class="bg-gradient-to-r from-[#201E2C] to-[#6D6A7B] p-[1px] rounded-[15px] shadow-md flex-shrink-0 w-[444px] will-change-transform"
      >
        <div
          class="bg-gradient-to-r from-[#0F0C1D] to-[#1F1A36] rounded-[inherit] p-[25px] w-full h-full"
        >
          <div class="flex items-center gap-3">
            <img
              src="../assets/images/avatar01.png"
              alt="Avatar"
              class="w-[75px] h-[75px] rounded-full object-cover"
            />
            <div class="-space-y-1">
              <p class="block font-semibold">{{ user.name }}</p>
              <small class="text-gray-500"><i>@client_name</i></small>
            </div>
          </div>
          <p class="mt-3 italic text-gray-700">{{ user.message }}</p>
        </div>
      </article>
    </div>

    <!-- Row 2 -->
    <div ref="row2Ref" class="flex gap-6">
      <article
        v-for="(user, i) in [...row2, ...row2]"
        :key="`${user.name}-row1-${i}`"
        class="bg-gradient-to-r from-[#201E2C] to-[#6D6A7B] p-[1px] rounded-[15px] shadow-md flex-shrink-0 w-[444px] will-change-transform"
      >
        <div
          class="bg-gradient-to-r from-[#0F0C1D] to-[#1F1A36] rounded-[inherit] p-[25px] w-full h-full"
        >
          <div class="flex items-center gap-3">
            <img
              src="../assets/images/avatar01.png"
              alt="Avatar"
              class="w-[75px] h-[75px] rounded-full object-cover"
            />
            <div class="-space-y-1">
              <p class="block font-semibold">{{ user.name }}</p>
              <small class="text-gray-500"><i>@client_name</i></small>
            </div>
          </div>
          <p class="mt-3 italic text-gray-700">{{ user.message }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
