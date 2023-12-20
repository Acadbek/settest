<script setup lang="ts">
defineProps({
  color: {
    type: Object,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <UButton
    class="flex justify-start !text-left select-none items-center rounded-md px-2 py-1.5 gap-2 relative cursor-pointer"
    :class="{ 'hover:!bg-transparent': color.value === label.toLowerCase() }"
    block
    color="gray"
    :label="label"
    variant="ghost"
    :disabled="color.value === label.toLowerCase()"
  >
    <template #trailing>
      <UIcon :name="icon" />
    </template>
  </UButton>
</template>


