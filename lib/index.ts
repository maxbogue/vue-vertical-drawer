import { VueConstructor } from 'vue';

import VerticalDrawer from './VerticalDrawer.vue';

// Declare install function executed by Vue.use()
export const install = Object.assign(
  (Vue: VueConstructor) => {
    if (install.isInstalled) return;
    install.isInstalled = true;
    Vue.component('VerticalDrawer', VerticalDrawer);
  },
  { isInstalled: false }
);

// Auto-install when Vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
  // @ts-ignore
} else if (typeof global !== 'undefined') {
  // @ts-ignore
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use({ install });
}

export default VerticalDrawer;
