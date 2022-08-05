import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import baseComponents from "@/components/Base";

const app = createApp(App);

baseComponents.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
