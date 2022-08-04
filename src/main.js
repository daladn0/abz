import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import MainButton from "@/components/Base/MainButton.component.vue";

const app = createApp(App);

app.component("MainButton", MainButton);

app.use(store).use(router).mount("#app");
