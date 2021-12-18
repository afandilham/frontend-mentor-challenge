import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'

import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseDescription from "./components/ui/BaseDescription.vue";
import BaseFeatures from "./components/ui/BaseFeatures.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-description", BaseDescription);
app.component("base-features", BaseFeatures);

app.mount('#app')
