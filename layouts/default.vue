<template>
  <TheNav />
  <main container mx-auto>
    <NuxtLink color="green" to="students">Students</NuxtLink>
    <slot />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
