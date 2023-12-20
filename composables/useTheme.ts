export const useTheme = () => {
  const colorMode = useColorMode()

  const change = computed({
    get() {
      return colorMode.value === "dark";
    },
    set() {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
  });

  return change;
}
