<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
const isOpen = ref(false);
const length = ref(30);

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

const accountForm = reactive({ name: "Benjamin", username: "benjamincanac" });
const passwordForm = reactive({ currentPassword: "", newPassword: "" });

function onSubmit(form) {
  console.log("Submitted form:", form);
}
</script>

<template>
  <SlideOver :length="length" />
  <UTabs :items="items" class="w-full col-span-6">
    <template #item="{ item }">
      <UCard
        @submit.prevent="
          () => onSubmit(item.key === 'account' ? accountForm : passwordForm)
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
          <div v-for="i in 30" :key="i">
            <div border border-base rounded-md p-4>
              <h3 :id="i">Savol: {{ i }}</h3>
              <p>Tovuqning nechta oyogi bor</p>
            </div>
          </div>
        </div>
        <div v-else-if="item.key === 'majburiy'" class="space-y-3">
          <UFormGroup label="Current Password" name="current" required>
            <UInput v-model="passwordForm.currentPassword" type="password" required />
          </UFormGroup>
          <UFormGroup label="New Password" name="new" required>
            <UInput v-model="passwordForm.newPassword" type="password" required />
          </UFormGroup>
        </div>

        <template #footer>
          <UButton type="submit" color="primary" class="bg-primary">
            Save {{ item.key === "account" ? "account" : "password" }}
          </UButton>
        </template>
      </UCard>
    </template>
  </UTabs>
</template>
