<script setup lang="ts">
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`;

watchEffect(() => {
  if (user.value) {
    navigateTo("/profile");
  }
});
</script>

<template>
  <h1>Login page</h1>
  {{ user ? user : "not user" }}
  <UButton
    icon="i-mdi:github"
    block
    label="Github"
    variant="primary"
    @click="auth.signInWithOAuth({ provider: 'github', options: { redirectTo } })"
  ></UButton>
</template>
