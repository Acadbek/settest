<template>
  <TheNav />
  <main mx-auto h-screen h-100dvh of-hidden>
    <div grid grid-cols-4 gap-4>
      <Sidebar col-span-1 />
      <div col-span-3 h-100dvh of-hidden h-screen>
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
