import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import MainButton from "@/components/Base/MainButton.component.vue";
import FormInput from "@/components/Base/FormInput.component.vue";
import Tooltip from "@/components/Base/ToolTip.component.vue";

const app = createApp(App);

app.component("MainButton", MainButton);
app.component("FormInput", FormInput);
app.component("ToolTip", Tooltip);

app.use(store).use(router).mount("#app");
