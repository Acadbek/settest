<script setup lang="ts">
const { ui } = useAppConfig();
</script>

<template>
  <header container mx-auto py-3 bg-base>
    <nav flex justify-between items-center>
      <h1>LOGO</h1>
      <Search />
      <ColorSchemeToggle />
    </nav>
  </header>
</template>
