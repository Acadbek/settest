<script setup lang="ts">
const { links, footer, toc } = useAppConfig();
let theme = useTheme();
const color = useColorMode();

// refs
const input = ref("");
const isOpen = ref(false);
const content = ref();

const changeThemeAndCloseModal = () => {
  theme.value = true;
  isOpen.value = false;
};

const filteredData = computed(() => {
  if (input.value === "") {
    return [];
  } else {
    return links.filter((link) =>
      link.label.toLowerCase().includes(input.value.toLowerCase())
    );
  }
});
</script>

<template>
  <div>
    <button
      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible-ring-primary-400 items-center flex-1 hidden lg:flex"
      label="Open"
      @click="isOpen = true"
    >
      <i i-carbon-search text-md></i>
      <span>Search...</span>
      <div space-x-1 ml-88>
        <UKbd>Ctrl</UKbd>
        <UKbd>K</UKbd>
      </div>
    </button>

    <UModal v-model="isOpen">
      <UInput
        icon="i-ic:baseline-search"
        autocomplete="off"
        size="md"
        color="red"
        :trailing="false"
        variant="none"
        class="border-b border-style"
        placeholder="Search..."
        v-model="input"
      />

      <div
        class="border-b border-style text-sm text-gray-700 dark:text-gray-200"
      >
        <MenuInModal
          label="Introduction"
          description="Welcome to Nuxt UI Pro documentation template."
        />
        <MenuInModal
          label="Usage"
          description="Welcome to Nuxt UI Pro documentation template."
        />
      </div>

      <div p-2>
        <div v-for="item in filteredData" :key="item">
          <NuxtLink @click="isOpen = false" :to="item.to">
            <MenuInModal :label="item.label" />
          </NuxtLink>
        </div>

        <h2 px-2 my-2 text-xs font-semibold text-gray-900 dark:text-white>
          Theme
        </h2>
        <Button
          @click="changeThemeAndCloseModal"
          :color="color"
          label="Dark"
          icon="i-carbon-moon"
        />
        <Button
          @click="changeThemeAndCloseModal"
          :color="color"
          label="Light"
          icon="i-carbon-sun"
        />
      </div>
    </UModal>
  </div>
</template>
