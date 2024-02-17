<template>
  <div>
    <h1>Students</h1>
    <div flex items-center gap-4>
      <input type="checkbox" id="1" />
      <label
        class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50 inline-block w-full"
        for="1"
        >uzb</label
      >
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: ["auth-logged-in"],
});
</script>

<style scoped></style>
