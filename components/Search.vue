<script setup lang="ts">
const v = ref("");
const isOpen = ref(false);

const data = ref<string[]>(["students", "home", "test", "dashboard"]);

function search() {
  if (v.value === "") {
    return [];
  } else {
    return data.value.filter((d) =>
      d.toLowerCase().includes(v.value.toLowerCase())
    );
  }
}
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
      <UInput @input="search" placeholder="Search..." v-model="v" />

      <div class="p-4">
        <div v-for="item in search()" :key="item">
          <NuxtLink
            @click="isOpen = false"
            :to="item === 'home' ? '/' : item"
            >{{ item }}</NuxtLink
          >
        </div>
      </div>
    </UModal>
  </div>
</template>

<style scoped>
/* Add your scoped styles here if needed */
</style>
