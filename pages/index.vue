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
          focus:outline-none
          disabled:cursor-not-allowed
          light:bg-green-400
          disabled:opacity-75
          flex-shrink-0
          rounded-md
          text-sm
          gap-x-2.5
          px-3.5
          py-2.5
          shadow-sm
          text-white
          font-bold
          dark:text-gray-900
          hover:light:bg-green-500
          hover:bg-primary-600
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-primary-500
          dark:focus-visible:outline-primary-400
          inline-flex
          items-center
          >Get Started
          <span
            i-heroicons-arrow-right-20-solid
            flex-shrink-0
            h-5
            w-5
            aria-hidden="true"
          ></span>
        </UButton>
      </div>
    </div>
    <div col-span-2 h-screen>
      <div border-style border>
        <Card title="hello card" icon="carbon-3d-cursor" color="blue" to="https://github.com/acadbek"/>
      </div>
    </div>
  </div>
</template>


<style scoped></style>
