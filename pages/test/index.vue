<script setup lang="ts">
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

const { data: results } = useFetch("https://opentdb.com/api.php?amount=34&type=multiple");

function methods(e) {
  return { value: `a${e}`, label: `a${e}` };
}

const selected = ref("sms");

const mainForm = reactive({ name: results, username: "asas" });
const mandatoryForm = reactive({ currentPassword: "asad", newPassword: "" });
console.log(mandatoryForm, "pass");

function onSubmit(form) {
  console.log("Submitted form:", form);
}
</script>

<template>
  <SlideOver :length="results?.results.length" />
  <UTabs :items="items" class="w-full col-span-6">
    <template #item="{ item }">
      <UCard
        @submit.prevent="() => onSubmit(item.key === 'asosiy' ? mainForm : mandatoryForm)"
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
          <div v-for="(question, i) in mainForm?.name.results" :key="question.question">
            <div border border-base rounded-md p-4>
              <h3 :id="i + 1" class="text-[18px] pb-2">
                {{ i + 1 }} - {{ question.question }}
              </h3>
            </div>
          </div>
        </div>
        <div v-else-if="item.key === 'majburiy'" class="space-y-3">
          <p>Majburiy</p>
        </div>

        <template #footer>
          <UButton type="submit" color="primary" class="bg-primary">
            Save {{ item.key === "asosiy" ? "asosiy" : "majburiy" }}
          </UButton>
        </template>
      </UCard>
    </template>
  </UTabs>
</template>
