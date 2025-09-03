/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 扩展全局属性类型
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $getAssetUrl: (path: string) => string;
  }
}