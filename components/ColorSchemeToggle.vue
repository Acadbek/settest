<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <button
    text-2xl
    i-carbon-moon
    dark:i-carbon-sun
    @click="isDark = !isDark"
    p-2
    rounded
    hover:bg-active
  ></button>
</template>
