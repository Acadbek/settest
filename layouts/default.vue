<template>
  <TheNav />
  <main container mx-auto>
    <Sidebar v-if="route.name != 'index'" />
    <slot />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
