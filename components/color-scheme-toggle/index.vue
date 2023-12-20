<script setup lang="ts">
const theme = useTheme();
</script>

<template>
  <button
    @click="theme = !theme"
    dark
    text-2xl
    i-carbon-moon
    dark:i-carbon-sun
    p-2
    rounded
    hover:bg-active
  ></button>
</template>
