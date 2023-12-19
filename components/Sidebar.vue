<template>
  <UVerticalNavigation :links="links" />
</template>

<script setup lang="ts">
const { links } = useAppConfig();
</script>

<style scoped>
</style>
