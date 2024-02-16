<script setup lang="ts">
const { ui } = useAppConfig();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const auth = useState("auth");

const usernameAlt = computed(() => auth?._object?.$sauth?.user?.name.toUpperCase());

const items = [
  [
    {
      label: "Profile",
      icon: "i-heroicons-user",
      to: `${localePath("/profile")}`,
    },
  ],
  [
    {
      label: "Settings",
      icon: "i-heroicons-cog-8-tooth",
      to: `${localePath("/settings")}`,
    },
  ],
  [
    {
      label: "Documentation",
      icon: "i-heroicons-book-open",
      to: `${localePath("/docs")}`,
    },
  ],
  [
    {
      label: "Sign out",
      icon: "i-heroicons-arrow-left-on-rectangle",
      to: "/api/logout",
      external: true,
    },
  ],
];
</script>

<template>
  <header flex justify-center items-center py-4 bg-base border-b border-style>
    <nav container flex justify-between items-center>
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
        <template v-if="$auth.user">
          <UDropdown
            :items="items"
            :ui="{ item: { disabled: 'cursor-text select-text' } }"
            :popper="{ placement: 'bottom-start' }"
          >
            <!-- :alt="`${$auth.user.given_name} ${$auth.user.family_name}`" -->
            <UAvatar :alt="usernameAlt" :src="$auth.user?.picture" />

            <template #account="{ item }">
              <div class="text-left">
                <p>Signed in as</p>
                <p class="truncate font-medium text-gray-900 dark:text-white">
                  {{ $auth.user?.given_name }} {{ $auth.user?.family_name }}
                </p>
              </div>
            </template>

            <template #item="{ item }">
              <span class="truncate">{{ item.label }}</span>

              <UIcon
                :name="item.icon"
                class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
              />
            </template>
          </UDropdown>
        </template>
        <div v-else flex items-center>
          <UButton to="/api/login" external color="primary" variant="link">{{
            $t("login")
          }}</UButton>
          <UButton to="/api/register" external color="primary" variant="link">
            {{ $t("register") }}
          </UButton>
        </div>

        <!-- <NuxtLink to="/profile">
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
        </template> -->
      </div>
    </nav>
  </header>
</template>
