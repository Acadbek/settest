<script setup lang="ts">
const localePath = useLocalePath();
const route = useRoute();
</script>

<template>
  <TheNav />
  <main container mx-auto>
    <NuxtLink color="green" :to="localePath('test')">Tests</NuxtLink>
    <slot />
  </main>
</template>
