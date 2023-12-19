<template>
  <TheNav />
  <main container mx-auto h-screen h-100dvh of-hidden>
    <div class="grid grid-cols-4">
      <Sidebar col-span-1 />
      <div class="border border-style col-span-3 h-100dvh of-hidden h-screen">
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const foo = useFoo();
</script>

<style scoped>
</style>
