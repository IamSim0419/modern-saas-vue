import gsap from "gsap";

export type GsapPreset = "fade-in" | "slide-up" | "scale-in" | "stagger-fade";

interface GsapOptions {
  preset?: GsapPreset;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
}

export function useGsapAnimation(el: Element | null, options: GsapOptions = {}) {
  if (!el) return;

  const {
    preset = "fade-in",
    delay = 0,
    duration = 0.8,
    stagger = 0.2,
    ease = "power2.out",
  } = options;

  const timeline = gsap.timeline();

  switch (preset) {
    case "fade-in":
      timeline.from(el, {
        opacity: 0,
        duration,
        delay,
        ease,
      });
      break;

    case "slide-up":
      timeline.from(el, {
        y: 40,
        opacity: 0,
        duration,
        delay,
        ease,
      });
      break;

    case "scale-in":
      timeline.from(el, {
        scale: 0.8,
        opacity: 0,
        duration,
        delay,
        ease,
      });
      break;

    case "stagger-fade":
      timeline.from(el, {
        y: 30,
        opacity: 0,
        duration,
        stagger,
        delay,
        ease,
      });
      break;

    default:
      console.log(`Unknown animation preset: ${preset}`);
  }

  return timeline;
}
