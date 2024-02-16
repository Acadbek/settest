<script setup>
definePageMeta({
  middleware: ["auth-logged-in"],
});
</script>

<template v-if="$auth?.user">
  <h1 text-3xl mb-4>{{ $auth.user?.name }} {{ $auth.user?.family_name }}</h1>
  <h2 text-3xl mb-4>
    Email: <span text-6 text-gray-300>{{ $auth.user?.email }}</span>
  </h2>
  <NuxtImg :src="$auth.user?.picture" />
</template>

<style lang="scss" scoped></style>
