<template>
  <TheNav />
  <main container mx-auto h-screen h-100dvh of-hidden>
    <NuxtLink color="green" to="students">Students</NuxtLink>
    <slot />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
