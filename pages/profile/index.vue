<script lang="ts" setup>
const auth = useState("auth");

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div>
    <Profile />
  </div>
</template>
