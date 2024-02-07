<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

definePageMeta({});

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/",
    },
  });
};
</script>

<template>
  <h1>Login page</h1>
  {{ user ? user : "not user" }}
  <UButton
    icon="i-mdi:github"
    block
    label="Github"
    variant="primary"
    @click="signInWithOAuth"
  ></UButton>
</template>
