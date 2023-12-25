import type { Ref } from 'vue';

export type Strategy = 'merge' | 'override'

export declare const useUI: <T>(key: any, $ui?: Ref<(Partial<T> & {
  strategy?: Strategy | undefined;
}) | undefined> | undefined, $config?: T | Ref<T> | undefined, $wrapperClass?: Ref<string>, withAppConfig?: boolean) => {
  ui: import("vue").ComputedRef<T>;
  attrs: import("vue").ComputedRef<Pick<{
    [x: string]: unknown;
  }, string>>;
};
