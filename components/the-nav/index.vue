<script setup lang="ts">
const { ui } = useAppConfig();
// const ariaLabel = computed(() => (props.title || (slots.title && getSlotChildrenText(slots.title())) || 'Card link').trim())
// for card

</script>

<template>
  <header flex justify-center items-center py-4 bg-base border-b border-style>
    <nav container flex justify-between items-center>
      <NuxtLink class="i-bxl:tux text-4xl" to="/"> </NuxtLink>
      <SearchBar />
      <ColorSchemeToggle />
    </nav>
  </header>
</template>

