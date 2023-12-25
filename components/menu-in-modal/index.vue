<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});
</script>

<template>
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
        <span class="truncate flex-none">{{ label }}</span>
        <span class="truncate text-gray-400 dark:text-gray-500"
          >{{ description }}
        </span>
      </div>
    </div>
  </div>
</template>

