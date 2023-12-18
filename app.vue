<script setup lang="ts">
import "@unocss/reset/tailwind.css";
import "./styles/base.css";

const { seo } = useAppConfig();

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon" }],
  htmlAttrs: { lang: "uz" },
});

useSeoMeta({
  ogSiteName: seo?.siteName,
});
</script>

<template>  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
