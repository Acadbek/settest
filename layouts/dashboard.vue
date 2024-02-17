<template>
  <TheNav />
  <main container mx-auto>
    <div grid grid-cols-12 gap-4 mt-4>
      <Sidebar col-span-2 />
      <div col-span-10 min-h-screen>
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
