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
      <div flex gap-4>
        <ColorSchemeToggle mt-1.4/>
        <NuxtLink to="/profile">
          <UAvatar
            size="sm"
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
          />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

