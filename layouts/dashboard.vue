<template>
  <TheNav />
  <main container mx-auto h-screen h-100dvh>
    <div grid grid-cols-4 gap-4 mt-4>
      <Sidebar col-span-1 />
      <div col-span-3 h-100dvh h-screen>
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
