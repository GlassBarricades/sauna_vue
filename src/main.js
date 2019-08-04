/*jshint esversion: 6 */
import Vue from 'vue';

import App from './App.vue';
import Home from "./views/Home";
import Stock from "./views/Stock";
import Booking from "./views/Booking";
import Contact from "./views/Contact";
import Gallery from "./views/Gallery";
import Service from "./views/Service";
import Testimonial from "./views/Testimonial";
import Tab from "./components/TabService.vue";
import Testim from "./components/TestimonialComponent.vue";
import Cont from "./components/ContactComponent.vue";
import Gal from "./components/GalleryComponent.vue";
import TimeLine from "./components/TimeLine.vue";

import router from './router';
import store from './store';
import './quasar';

Vue.config.productionTip = false;
Vue.component('home', Home);
Vue.component('stock', Stock);
Vue.component('booking', Booking);
Vue.component('contact', Contact);
Vue.component('gallery', Gallery);
Vue.component('service', Service);
Vue.component('testimonial', Testimonial);
Vue.component('service-tabs', Tab);
Vue.component('testimonial-scroll', Testim);
Vue.component('contact-me', Cont);
Vue.component('gal', Gal);
Vue.component('time-line', TimeLine);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
