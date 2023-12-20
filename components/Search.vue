<script setup lang="ts">
const { links } = useAppConfig();
let theme = useTheme();
const color = useColorMode();

const inputValue = ref("");
const isOpen = ref(false);

const changeThemeAndCloseModal = () => {
  theme.value = true;
  isOpen.value = false;
};

function search() {
  if (inputValue.value === "") {
    return [];
  } else {
    return links.filter((link) =>
      link.label.toLowerCase().includes(inputValue.value.toLowerCase())
    );
  }
}

const checkTheme = () => {};
onMounted(() => {
  checkTheme();
});
</script>

<template>
  <div>
    <button
      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible-ring-primary-400 items-center flex-1 hidden lg:flex"
      label="Open"
      @click="isOpen = true"
    >
      <i class="i-carbon-search text-md"></i>
      <span>Search...</span>
      <div space-x-1 ml-88>
        <UKbd>Ctrl</UKbd>
        <UKbd>K</UKbd>
      </div>
    </button>

    <UModal class="w-full" v-model="isOpen">
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        size="xl"
        color="white"
        :trailing="false"
        variant="none"
        class="border-b border-style"
        placeholder="Search..."
        v-model="inputValue"
      />

      <div
        class="p-2 border-b border-style text-sm text-gray-700 dark:text-gray-200"
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

      <div class="p-2 h-84 w-full">
        <div v-for="item in search()" :key="item">
          <NuxtLink @click="isOpen = false" :to="item.to">
            {{ item.label }}
          </NuxtLink>
        </div>

        <h2
          class="px-2 my-2 text-xs font-semibold text-gray-900 dark:text-white"
        >
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
