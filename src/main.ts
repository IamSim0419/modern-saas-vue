import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import gsap from "gsap"; // <-- import gsap core
import { ScrollToPlugin, ScrollSmoother } from "gsap/all";
import { vGsap } from "./directives/gsap";
import App from "./App.vue";
import router from "./router";

gsap.registerPlugin(ScrollToPlugin, ScrollSmoother);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive("gsap", vGsap);

app.mount("#app");

// Initialize ScrollSmoother
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
});
