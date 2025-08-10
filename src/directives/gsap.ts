import { useGsapAnimation } from "@/composables/useGsapAnimation";
import type { Directive } from "vue";

export const vGsap: Directive = {
  mounted(el, binding) {
    let target: Element | NodeListOf<Element> = el;

    // If preset is stagger-fade, target the children instead
    if (binding.value?.preset === "stagger-fade") {
      target = el.children; // or el.querySelectorAll(':scope > *')
    }

    useGsapAnimation(target as Element, binding.value);
  },
};

//! Directive Usage
// <div>
//     <h1
//       v-gsap="{ preset: 'fade-in', delay: 0.5 }"
//       class="font-dmSans-bold text-h1-desktop bg-washedPurple-700 text-center"
//     >
//       You did it!
//     </h1>

//     <h1
//       v-gsap="{ preset: 'scale-in' }"
//       class="font-dmSans-medium text-h1-desktop bg-washedPurple-500 text-center"
//     >
//       You did it!
//     </h1>

//     <h1
//       v-gsap="{ preset: 'slide-up' }"
//       class="font-dmSans-regular text-h1-desktop bg-washedPurple-500 text-center"
//     >
//       You did it!
//     </h1>

//     <div v-gsap="{ preset: 'stagger-fade', stagger: 0.5 }" class="grid grid-cols-2 gap-4">
//       <div :class="colorObject[n - 1]" v-for="n in 6" :key="n">Color: {{ colorObject[n - 1] }}</div>
//     </div>
//   </div>
