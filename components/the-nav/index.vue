<script setup lang="ts">
const { ui } = useAppConfig();
const switchLocalePath = useSwitchLocalePath();

// const ariaLabel = computed(() => (props.title || (slots.title && getSlotChildrenText(slots.title())) || 'Card link').trim())
// for card
</script>

<template>
  <header flex justify-center items-center py-4 bg-base border-b border-style>
    <nav container flex justify-between items-center>
      <NuxtLink class="i-bxl:tux text-4xl" to="/"> </NuxtLink>
      <SearchBar />
      <div flex gap-5>
        <UPopover mode="hover" class="mt-[3px]">
          <UButton mode="hover" color="solid" trailing-icon="i-heroicons:language" />
          <template #panel border border-base>
            <div class="p-4 flex flex-col gap-2">
              <NuxtLink class="hover:green-color" :to="switchLocalePath('uz')"
                >O'zbekcha</NuxtLink
              >
              <NuxtLink class="hover:green-color" :to="switchLocalePath('ru')"
                >Русский</NuxtLink
              >
              <NuxtLink class="hover:green-color" :to="switchLocalePath('en')"
                >English</NuxtLink
              >
            </div>
          </template>
        </UPopover>
        <ColorSchemeToggle mt-1.4 />
        <NuxtLink to="/profile">
          <UAvatar
            size="sm"
            src="https://avatars.githubusercontent.com/u/87940040?v=4"
            alt="Avatar"
          />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
