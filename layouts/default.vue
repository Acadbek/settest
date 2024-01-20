<template>
  <TheNav />
  <main container mx-auto>
    <NuxtLink color="green" to="test">Tests</NuxtLink>
    <slot />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
