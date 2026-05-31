import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

export function mount(el: string | HTMLElement) {
    const app = createApp(App);

    app.use(createPinia());
    app.use(router);

    app.mount(el);

}
