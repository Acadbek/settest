<template>
  <TheNav />
  <main container mx-auto>
    <div grid grid-cols-5 gap-4 mt-4>
      <Sidebar col-span-1 />
      <div col-span-4 min-h-screen>
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
