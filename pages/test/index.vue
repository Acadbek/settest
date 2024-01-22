<script setup lang="ts">
const nuxtApp = useNuxtApp();

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

const { data: results } = useFetch("https://opentdb.com/api.php?amount=3&type=multiple", {
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});

const selected = ref("sms");

const mainForm = reactive({ name: results, username: "asas" });
const mandatoryForm = reactive({ currentPassword: "asad", newPassword: "" });

function onSubmit(form) {
  console.log("Submitted form:", form);
}
</script>

<template>
  <SlideOver v-if="results?.results" :length="results?.results.length" />
  <UTabs :items="items" class="w-full col-span-6">
    <template #item="{ item }">
      <UCard
        @submit.prevent="() => onSubmit(item.key === 'asosiy' ? results : mandatoryForm)"
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
              <h3 :id="i + 1" class="text-[18px] pb-2">
                {{ i + 1 }} - {{ question.question }}
              </h3>
            </div>
          </div>
          <div v-else v-for="_ in 5">
            <USkeleton class="h-[50px] w-full mb-1" />
            <USkeleton class="h-[50px] w-full" />
          </div>
        </div>
        <div v-else-if="item.key === 'majburiy'" class="space-y-3">
          <p>Majburiy</p>
        </div>

        <template #footer>
          <UButton :disabled="!results" type="submit" color="primary" class="bg-primary">
            Save {{ item.key === "asosiy" ? "asosiy" : "majburiy" }}
          </UButton>
        </template>
      </UCard>
    </template>
  </UTabs>
</template>
