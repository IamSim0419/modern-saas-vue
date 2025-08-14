<script lang="ts" setup>
import { socialLinks } from "@/lib/constant";
import { footerLinks } from "@/lib/constant";
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Logo and Description -->
        <div class="footer-logo-section">
          <div class="footer-logo-content">
            <div>
              <img src="../assets/icons/footer_logo.svg" alt="Company Logo" class="footer-logo" />
            </div>
            <p class="footer-description">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups. Lorem ipsum is placeholder
              text commonly used in the graphic, print, and publishing industries for previewing
              layouts and visual mockups.
            </p>
            <!-- Social Icons -->
            <div class="social-icons">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                href="#"
                class="social-link"
                :aria-label="social.name"
              >
                <svg class="social-icon" viewBox="0 0 24 24">
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Links Sections -->
        <div v-for="(section, index) in footerLinks" :key="index" class="links-section">
          <h3 class="links-title">
            {{ section.title }}
          </h3>
          <ul class="links-list">
            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
              <a href="#" class="link-item">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <p>&copy; {{ new Date().getFullYear() }} cypress. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@reference 'tailwindcss';

.footer {
  @apply mt-30 py-12 px-[25px] md:px-[45px];
}

.footer-container {
  @apply max-w-7xl mx-auto;
}

.footer-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12;
}

.footer-logo-section {
  @apply md:col-span-2 lg:col-span-6;
}

.footer-logo-content {
  @apply flex flex-col space-y-4;
}

.footer-logo {
  @apply h-8 w-auto;
}

.footer-description {
  @apply text-base leading-relaxed;
  color: var(--color-neutral-5);
}

.social-icons {
  @apply flex space-x-8 md:space-x-12;
}

.social-link {
  @apply hover:text-neutral-100 transition-colors;
  color: var(--color-neutral-8);
}

.social-icon {
  @apply h-5 w-5 fill-current;
}

.links-section {
  @apply mt-8 md:mt-10;
}

.links-title {
  @apply font-medium text-lg mb-4;
  color: var(--color-neutral-1);
}

.links-list {
  @apply space-y-2;
}

.link-item {
  @apply text-sm hover:text-white transition-colors;
  color: var(--color-neutral-7);
}

.copyright {
  @apply mt-12 pt-8 border-t border-gray-800 text-sm text-center;
  color: var(--color-neutral-7);
}
</style>
