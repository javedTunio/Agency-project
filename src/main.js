import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";

import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";

// createApp(App).use(router).use(MotionPlugin).mount("#app");
createApp(App)
  .use(router)
  .use(MotionPlugin, {
    directives: {
      "pop-bottom": {
        initial: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,

          transition: {
            delay: 200,
          },
        },
      },
    },
  })
  .mount("#app");
