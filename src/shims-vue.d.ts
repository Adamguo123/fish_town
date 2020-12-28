declare module '*.vue' {
  // import type { DefineComponent } from 'vue'
  // const component: DefineComponent<{}, {}, any>
  // export default component
  import Vue from 'vue'
  export default Vue;
}
declare module 'element-ui/lib/locale/lang/*' {
  export const elementLocale: any
}
declare module 'fastclick'
declare module 'vue-router'
declare module 'mint-ui'