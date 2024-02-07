<script setup lang="ts">
const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo("/profile");
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <p class="text-white font-3xl">Redirecting...</p>
  </div>
</template>
