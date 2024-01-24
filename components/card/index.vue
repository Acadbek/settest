<template>
  <component is="h1">asdasd</component>
</template>

<script setup lang="ts">
import colors from "#tailwind-config/theme/colors";

const appConfig = useAppConfig();

const config = computed(() => ({
  wrapper: "relative group overflow-hidden flex items-center rounded-lg",
  to: "hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",
  icon: {
    base: "w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none",
  },
  body: {
    base: "flex-1",
  },
  externalIcon: {
    name: appConfig.ui.icons.external,
    base: "w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]",
  },
  title: "text-gray-900 dark:text-white font-semibold text-base my-0",
  description: "text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0",
}));

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    as: "a";
    icon?: string;
    color?: string;
    to?: string;
    target?: string;
    title?: string;
    ui?: Partial<typeof config.value>;
    class?: any;
  }>(),
  {
    icon: undefined,
    color: "primary",
    to: undefined,
    target: undefined,
    title: undefined,
    ui: () => ({}),
    class: undefined,
  }
);

const { ui, attrs } = useUI(
  "content.card",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true
);

const colorLight = computed(() => {
  if (props.color === "primary") {
    return "rgb(var(--color-primary-DEFAULT))";
  }
  return colors[props.color]?.["500"] || props.color;
});
const colorDark = computed(() => {
  if (props.color === "primary") {
    return "rgb(var(--color-primary-DEFAULT))";
  }
  return colors[props.color]?.["400"] || props.color;
});
</script>
