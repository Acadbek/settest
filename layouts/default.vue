<script setup lang="ts">
const localePath = useLocalePath();
const route = useRoute();
</script>

<template>
  <TheNav />
  <main container mx-auto h-screen>
    <slot />
  </main>
</template>
