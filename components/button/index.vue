<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color: string;
    label: string;
    icon: string;
    variant: string;
  }>(),
  {
    variant: "ghost",
  }
);
</script>

<template>
  <UButton
    class="flex justify-start !text-left select-none items-center rounded-md px-2 py-1.5 gap-2 relative cursor-pointer"
    :class="{ 'hover:!bg-transparent': color?.value === label.toLowerCase() }"
    block
    :color="props.color"
    :label="label"
    :variant="props.variant"
    :disabled="color?.value === label.toLowerCase()"
  >
    <template #trailing>
      <UIcon :name="icon" />
    </template>
  </UButton>
</template>


