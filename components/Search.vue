<script setup lang="ts">
const { links } = useAppConfig();

const inputValue = ref("");
const isOpen = ref(false);

function search() {
  if (inputValue.value === "") {
    return [];
  } else {
    return links.filter((link) =>
      link.label.toLowerCase().includes(inputValue.value.toLowerCase())
    );
  }
}
const checkTheme = () => {
  let theme = document.getElementsByTagName("html")[0].className;
};
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

    <UModal v-model="isOpen">
      <UInput
        variant="none"
        class="border-b border-style"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="xl"
        color="white"
        :trailing="false"
        placeholder="Search..."
        v-model="inputValue"
      />

      <div class="text-sm text-gray-700 dark:text-gray-200">
        <div
          class="flex justify-between select-none items-center rounded-md px-2 py-1.5 gap-2 relative hover:bg-gray-100 hover:dark:bg-gray-800 dark:bg-transparent text-gray-900 dark:text-white cursor-pointer"
        >
          <div class="flex items-center gap-2 min-w-0">
            <span
              class="i-heroicons-document-text flex-shrink-0 w-4 h-4 text-gray-900 dark:text-white"
              aria-hidden="true"
            >
            </span>
            <div class="flex items-center gap-1.5 min-w-0">
              <span class="truncate flex-none">Introduction</span>
              <span class="truncate text-gray-400 dark:text-gray-500"
                >Welcome to Nuxt UI Pro documentation template.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="py-4 h-84 w-full">
        <div v-for="item in search()" :key="item">
          <NuxtLink @click="isOpen = false" :to="item.to">
            {{ item.label }}
          </NuxtLink>
        </div>
        <div class="border-t border-style">Theme</div>
      </div>
    </UModal>
  </div>
</template>
