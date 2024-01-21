<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    length: number;
  }>(),
  {
    length: 0,
  }
);

const isOpenSlideOver = ref(false);

const handleSlide = async (e) => {
  isOpenSlideOver.value = false;
  await navigateTo(`#${e}`);
};
</script>

<template>
  <UButton label="Open SlideOver" color="white" @click="isOpenSlideOver = true" />

  <USlideover v-model="isOpenSlideOver">
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <Placeholder class="h-8" />
      </template>

      <div flex flex-wrap gap-2 justify-start items-center>
        <UButton
          @click="handleSlide(i)"
          class="text-[20px] w-10 h-10 flex items-center justify-center"
          v-for="i in props.length"
          square
          :label="i"
          color="white"
        />
      </div>

      <template #footer>
        <Placeholder class="h-8" />
      </template>
    </UCard>
  </USlideover>
</template>
