import { useGsapAnimation } from "@/composables/useGsapAnimation";
import type { Directive } from "vue";

export const vGsap: Directive = {
  mounted(el, binding) {
    useGsapAnimation(el, binding.value);
  },
};
