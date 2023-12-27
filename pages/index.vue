<script setup lang="ts">
const { seo } = useAppConfig();
</script>

<template>
  <div grid grid-cols-4>
    <div col-span-2 h-screen pt-44>
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
    <div col-span-2 h-screen>
      <div border-style border>
        <Card />
      </div>
    </div>
  </div>
</template>


<style scoped></style>
