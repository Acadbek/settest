<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();
const { t } = useI18n();
// const nuxtApp = useNuxtApp();

// console.log(nuxtApp);

const links = [
  { label: useNuxtApp().$i18n.t("home"), icon: "i-heroicons-home", to: localePath("/") },
  {
    label: useNuxtApp().$i18n.t("students"),
    icon: "i-heroicons-academic-cap",
    to: localePath("/students"),
  },
  {
    label: useNuxtApp().$i18n.t("test"),
    icon: "i-heroicons-arrow-right",
    to: localePath("/test"),
  },
];
</script>

<template>
  <UVerticalNavigation :links="links" />
</template>
