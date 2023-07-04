/// <reference types="vite/client" />
declare module "*.vue" {
    import type { ComponentOptions } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const componentOptions: ComponentOptions
    export default componentOptions;
  }

  declare module "*.md" {
    import type { ComponentOptions } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const componentOptions: ComponentOptions
    export default componentOptions;
  }