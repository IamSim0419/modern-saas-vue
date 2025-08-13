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
const row1Animation = ref<gsap.core.Tween | null>(null);
const row2Animation = ref<gsap.core.Tween | null>(null);
const isHovered = ref(false);

onMounted(() => {
  if (row1Ref.value) {
    const distance = row1Ref.value.scrollWidth / 2;

    row1Animation.value = gsap.to(row1Ref.value, {
      x: -distance,
      duration: 60,
      ease: "none",
      repeat: -1,
      paused: isHovered.value,
    });
  }

  if (row2Ref.value) {
    const distance = row2Ref.value.scrollWidth / 2;

    row2Animation.value = gsap.fromTo(
      row2Ref.value,
      {
        x: -distance,
      },
      {
        x: 0,
        duration: 60,
        ease: "none",
        repeat: -1,
        paused: isHovered.value,
      }
    );
  }
});

const handleHover = (hover: boolean) => {
  isHovered.value = hover;
  if (row1Animation.value) row1Animation.value.paused(hover);
  if (row2Animation.value) row2Animation.value.paused(hover);
};
</script>

<template>
  <section>
    <!-- Row 1 -->
    <div ref="row1Ref" class="row">
      <article
        @mouseenter="handleHover(true)"
        @mouseleave="handleHover(false)"
        v-for="(user, i) in [...row1, ...row1]"
        :key="`${user.name}-row1-${i}`"
        class="row-card"
      >
        <div class="card-content">
          <div class="user">
            <img src="../assets/images/avatar01.png" alt="Avatar" />
            <div class="username">
              <p>{{ user.name }}</p>
              <small><i>@client_name</i></small>
            </div>
          </div>
          <p>{{ user.message }}</p>
        </div>
      </article>
    </div>

    <!-- Row 2 -->
    <div ref="row2Ref" class="row">
      <article
        v-for="(user, i) in [...row2, ...row2]"
        :key="`${user.name}-row1-${i}`"
        class="row-card"
      >
        <div class="card-content">
          <div class="user">
            <img src="../assets/images/avatar02.png" alt="Avatar" />
            <div class="username">
              <p>{{ user.name }}</p>
              <small><i>@client_name</i></small>
            </div>
          </div>
          <p>{{ user.message }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

section {
  @apply py-10 md:py-14 flex flex-col gap-[30px] overflow-hidden;
}

.row {
  @apply flex gap-6;
}

.row-card {
  @apply bg-gradient-to-r from-[#201E2C] to-[#6D6A7B] p-[1px] rounded-[15px] shadow-md flex-shrink-0 w-[444px] will-change-transform hover:scale-[1.02] transition-transform duration-300;
}

.card-content {
  @apply bg-gradient-to-r from-[#0F0C1D] to-[#1F1A36] rounded-[inherit] p-[25px] w-full h-full;
}

.card-content .user {
  @apply flex items-center gap-3;
}

.card-content img {
  @apply w-[75px] h-[75px] rounded-full object-cover;
}

.card-content .username {
  @apply -space-y-1;
}

.card-content .username > p {
  @apply block font-semibold;
  color: var(--color-washedPurple-600);
}

.card-content .username small {
  @apply text-gray-500;
  color: var(--color-washedPurple-700);
}

.card-content > p {
  @apply mt-3 italic text-[#64628C];
}
</style>
