<template>
  <div>
    <h1>Students</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: ['auth-logged-in']
});
</script>

<style scoped></style>
