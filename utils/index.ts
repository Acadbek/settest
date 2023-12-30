// import { defu, createDefu } from "defu";
// import { extendTailwindMerge } from "tailwind-merge";

// const customTwMerge = extendTailwindMerge({
//   classGroups: {
//     icons: [(classPart) => /^i-/.test(classPart)]
//   }
// });

// const defuTwMerge = createDefu((obj, key, value, namespace) => {
//   if (namespace !== "default" && !namespace.startsWith("default.") && typeof obj[key] === "string" && typeof value === "string" && obj[key] && value) {
//     obj[key] = customTwMerge(obj[key], value);
//     return true;
//   }
// });

// export function mergeConfig(strategy, ...configs) {
//   if (strategy === "override") {
//     return defu({}, ...configs);
//   }
//   return defuTwMerge({}, ...configs);
// }
