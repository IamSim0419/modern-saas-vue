<script lang="ts" setup>
import { computed } from "vue";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  buttonClass?: string; // Custom classes from parent
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  buttonClass: "",
  disabled: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const baseClasses =
  "inline-flex items-center justify-center rounded-[8px] font-medium transition-colors duration-200 focus:outline-none font-dmSans-medium px-[30px] py-[8px]";

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return props.disabled
        ? "bg-primary/50 text-white cursor-not-allowed"
        : "button-gradient cursor-pointer";
    case "secondary":
      return props.disabled
        ? "bg-gray-500/50 text-gray-200 cursor-not-allowed"
        : "bg-green-700 text-white hover:bg-gray-600 active:bg-gray-500 cursor-pointer";
    default:
      return "";
  }
});
</script>

<template>
  <button
    :class="[baseClasses, variantClasses, buttonClass]"
    :disabled="disabled"
    @click="!disabled && emit('click', $event)"
  >
    <div class="bg-overlay"></div>
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped>
@reference 'tailwindcss';

button span {
  @apply bg-gradient-to-r from-[#737373] to-[#D9D9D9] z-50 text-transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.button-gradient {
  @apply relative bg-gradient-to-r from-[#474A57] to-[#707070] hover:bg-gradient-to-r hover:from-[#5F5F63] hover:to-[#D9D9D9];
}

button .bg-overlay {
  @apply absolute inset-[1px] bg-gradient-to-b from-black to-[#464456] active:bg-gradient-to-b active:from-[#000000] active:to-[#5C587A] rounded-[7px];
}
</style>
