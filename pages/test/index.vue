<script setup lang="ts">
const nuxtApp = useNuxtApp();
const data = ref([]);

definePageMeta({
  layout: "dashboard",
});
const isOpen = ref(false);

const items = [
  {
    key: "asosiy",
    label: "Asosiy",
    description: "Make changes to your account here. Click save when you're done.",
  },
  {
    key: "majburiy",
    label: "Majburiy",
    description: "Change your password here. After saving, you'll be logged out.",
  },
];
const { data: results, status, error } = useFetch(
  "https://opentdb.com/api.php?amount=30&type=multiple",
  {
    getCachedData(key) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    },
  }
);

const scrollToTest = (i) => {
  navigateTo(`#${i + 1}`);
};

console.log(status, "status");
console.log(error, "error");

const selected = ref("sms");

function onSubmit(form) {
  console.log("Submitted form:", form);
}
</script>

<template>
  <!-- <SlideOver v-if="results?.results" :length="results?.results.length" /> -->
  <div class="grid grid-cols-12 gap-4">
    <UTabs :items="items" class="w-full col-span-8">
      <template #item="{ item }">
        <UCard
          @submit.prevent="
            () => onSubmit(item.key === 'asosiy' ? results : mandatoryForm)
          "
        >
          <template #header>
            <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              {{ item.label }}
            </p>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {{ item.description }}
            </p>
          </template>

          <div v-if="item.key === 'asosiy'" class="space-y-3">
            <div
              v-if="results?.results"
              v-for="(question, i) in results?.results"
              :key="question.question"
            >
              <div border border-base rounded-md p-4>
                <h3 :id="i + 1" class="text-[18px] tracking-wide pb-2">
                  {{ i + 1 }} - {{ question.question }}
                </h3>
                <div flex space-x-12>
                  <UCheckbox color="primary" label="A" />
                  <UCheckbox color="primary" label="B" />
                  <UCheckbox color="primary" label="C" />
                </div>
              </div>
            </div>
            <div v-if="status === 'pending'" v-for="_ in 5">
              <USkeleton class="h-[50px] w-full mb-1" />
              <USkeleton class="h-[50px] w-full" />
            </div>

            <div v-if="status === 'error'">
              <p>Something went wrong!</p>
            </div>
          </div>
          <div v-if="item.key === 'majburiy'" class="space-y-3">
            <h3>Majburiy tests</h3>
            <div v-if="status === 'pending'" v-for="_ in 5">
              <USkeleton class="h-[50px] w-full mb-1" />
              <USkeleton class="h-[50px] w-full" />
            </div>

            <div v-if="status === 'error'">
              <p>Something went wrong!</p>
            </div>
          </div>
        </UCard>
      </template>
    </UTabs>
    <div class="col-span-4 sticky top-3 h-screen">
      <div v-if="results" class="grid grid-cols-7 gap-3">
        <UButton
          class="text-[20px] w-10 h-10 flex col-span-1 items-center justify-center"
          v-for="(item, i) in results?.results"
          @click="scrollToTest(i)"
          square
          :label="i + 1"
          color="white"
        />
      </div>
      <div class="grid grid-cols-2 mt-4 gap-4">
        <div class="col-span-1 border flex items-center justify-center">TIME</div>
        <UButton
          v-if="results"
          :disabled="!results"
          class="!bg-primary col-span-1 flex items-center justify-center"
          size="lg"
        >
          Save
        </UButton>
      </div>
    </div>
  </div>
</template>
