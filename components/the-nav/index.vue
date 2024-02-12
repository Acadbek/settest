<script setup lang="ts">
const { ui } = useAppConfig();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  <header flex justify-center items-center py-4 bg-base border-b border-style>
    <nav container flex justify-between items-center>
      <!-- <NuxtLink class="i-bxl:tux text-4xl" to="/"> </NuxtLink> -->
      <NuxtLink :to="localePath('/')" class="font-bold text-3xl tracking-wider"
        >SETTEST</NuxtLink
      >
      <SearchBar />
      <div flex gap-5>
        <UPopover mode="hover" class="mt-[3px]">
          <UButton mode="hover" color="solid" trailing-icon="i-heroicons:language" />
          <template #panel border border-base>
            <div class="p-4 flex flex-col gap-2">
              <NuxtLink class="hover:green-color" :to="switchLocalePath('uz')"
                >O'zbekcha</NuxtLink
              >
              <NuxtLink class="hover:green-color" :to="switchLocalePath('ru')"
                >Русский</NuxtLink
              >
              <NuxtLink class="hover:green-color" :to="switchLocalePath('en')"
                >English</NuxtLink
              >
            </div>
          </template>
        </UPopover>
        <ColorSchemeToggle mt-1.4 />
        <NuxtLink to="/profile">
          <UAvatar
            v-if="$auth.user?.picture"
            size="sm"
            :src="$auth.user?.picture"
            alt="Avatar"
          />
        </NuxtLink>
        <template v-if="!$auth.user">
          <NuxtLink to="/api/login" external>Login</NuxtLink>
          <NuxtLink to="/api/register" external>Register</NuxtLink>
        </template>
        <template v-else>
          <p>{{ $auth.user?.given_name }}</p>
          <p>{{ $auth.user?.family_name }}</p>
          <NuxtLink to="/api/logout" external>Logout</NuxtLink>
        </template>
      </div>
    </nav>
  </header>
</template>
