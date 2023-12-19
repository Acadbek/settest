<template>
  <UModal v-model="isOpen">
    <UInput @input="search" placeholder="Search..." v-model="v" />

    <div class="p-4">
      <div v-for="item in search()" :key="item">
        <NuxtLink @click="isOpen = false" :to="item === 'home' ? '/' : item">{{
          item
        }}</NuxtLink>
      </div>
    </div>
  </UModal>
</template>

<script setup lang="ts">
export interface Props {
  msg?: string;
  labels?: string[];
}

withDefaults(defineProps<Props>(), {
  msg: "hello",
});
</script>
