<script setup lang="ts">
const { ui } = useAppConfig();
</script>

<template>
  <header flex justify-center items-center py-4 bg-base border-b border-style>
    <nav container flex justify-between items-center>
      <NuxtLink class="i-bxl:tux text-4xl" to="/"></NuxtLink>
      <SearchBar />
      <ColorSchemeToggle />
    </nav>
  </header>
</template>
