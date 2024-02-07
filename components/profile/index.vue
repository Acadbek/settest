<script setup>
const user = useSupabaseUser();

console.log(user);
</script>

<template>
  <h2 text-3xl mb-4>Email: {{ user.email }}</h2>
  <div text-3xl mb-4>{{ user.user_metadata.full_name }}</div>
  <NuxtImg
    :src="user.user_metadata.avatar_url"
    :placeholder="[30, 20]"
    width="300"
    height="200"
    class="rounded"
  />
</template>

<style lang="scss" scoped></style>
