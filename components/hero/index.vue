<script setup lang="ts">
const { seo } = useAppConfig();
const isOpen = ref(false);

const ui = {
  ring: "",
  divide: "divide-y divide-gray-100 dark:divide-gray-800",
};
</script>

<template>
  <section>
    <div grid grid-cols-4 h-screen>
      <div col-span-2 pt-56>
        <div
          text-7xl
          font-extrabold
          tracking-wider
          text-gray-900
          leading-20
          dark:text-white
          sm:text-7x
        >
          <h1 green-color inline font-black>
            {{ seo.mainTitle }}
          </h1>

          {{ seo.siteName }}
        </div>
        <p mt-6 text-4xl tracking-tight text-gray-600 dark:text-gray-300>
          Endi test ishlash qulay
        </p>
        <div mt-10 flex flex-wrap gap-x-6 gap-y-3>
          <UButton
            @click="isOpen = true"
            class="text-[18px] !bg-primary-500"
            color="primary"
            variant="solid"
          >
            <span
              class="i-heroicons-rocket-launch flex-shrink-0 h-5 w-5"
              aria-hidden="true"
            ></span>
            Testni boshlash
          </UButton>
        </div>
      </div>
      <div col-span-2>
        <div border-style border>
          <Card />
        </div>
      </div>
    </div>
  </section>
  <UModal v-model="isOpen" prevent-close>
    <UCard :ui="ui">
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Modal
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>

      <p>Asosiy</p>
      <p>Majburiy</p>
    </UCard>
  </UModal>
</template>
