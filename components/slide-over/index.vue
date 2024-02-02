<script setup lang="ts">
const props = withDefaults(defineProps<{ length: number }>(), { length: 0 });

const isOpenSlideOver = ref(false);

const handleSlide = async (e) => {
  isOpenSlideOver.value = false;
  await navigateTo(`#${e}`);
};
</script>

<template>
  <UButton
    class="fixed !bg-primary bottom-8 rounded-full text-[17px] right-8 z-10"
    label="Test holati"
    color="primary"
    @click="isOpenSlideOver = true"
  />

  <USlideover v-model="isOpenSlideOver">
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <UButton
        :ui="{ rounded: 'rounded-full' }"
        color="white"
        @click="isOpenSlideOver = false"
        class="p-2 h-10 w-10 flex hover:!bg-slate-800 justify-center items-center absolute top-[10px] left-[-50px]"
      >
        <i class="i-carbon:arrow-right text-white">a</i>
      </UButton>

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
