<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();
const { t } = useI18n();
const NA = useNuxtApp();

const links = [
  { label: NA.$i18n.t("home"), icon: "i-heroicons-home", to: localePath("/") },
  {
    label: NA.$i18n.t("students"),
    icon: "i-heroicons-academic-cap",
    to: localePath("/students"),
  },
  {
    label: NA.$i18n.t("test"),
    icon: "i-heroicons-arrow-right",
    to: localePath("/test"),
  },
];
</script>

<template>
  <UVerticalNavigation :links="links" />
</template>
