<script setup lang="ts">
const { seo } = useAppConfig();
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
        <p mt-6 text-2xl tracking-tight text-gray-600 dark:text-gray-300>
          Daftarda yechish jonga tegdimi? <br />
          Xa bo'lsa "Testni boshlash" tugmasini bos!
        </p>
        <div mt-10 flex flex-wrap gap-x-6 gap-y-3>
          <UButton
            to="test"
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
</template>
