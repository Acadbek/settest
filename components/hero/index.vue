<script setup lang="ts">
const { seo } = useAppConfig();
</script>

<template>
  <section>
    <div grid grid-cols-4 h-screen>
      <div col-span-2 pt-56>
        <h1
          text-5xl
          font-extrabold
          tracking-wide
          text-gray-900
          dark:text-white
          sm:text-7x
        >
          {{ seo.siteName }}
        </h1>
        <p mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300>
          Endi test ishlash qulay
        </p>
        <div mt-10 flex flex-wrap gap-x-6 gap-y-3>
          <UButton
            icon="i-heroicons-pencil-square"
            size="sm"
            color="primary"
            variant="solid"
            label="Button"
            :trailing="false"
          />
        </div>
      </div>
      <div col-span-2>
        <div border-style border>
          <Card />
        </div>
      </div>
    </div>
  </section>
</template>

