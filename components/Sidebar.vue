<script setup lang="ts">
const localePath = useLocalePath();

const links = [
  { label: "Home", icon: "i-heroicons-home", to: localePath("/") },
  { label: "Students", icon: "i-heroicons-academic-cap", to: localePath("/students") },
  { label: "Test", icon: "i-heroicons-arrow-right", to: localePath("/test") },
];
</script>

<template>
  <UVerticalNavigation :links="links" />
</template>
