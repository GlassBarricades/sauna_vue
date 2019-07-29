/*jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home";
import Stock from "./views/Stock";
import Booking from "./views/Booking";
import Contact from "./views/Contact";
import Gallery from "./views/Gallery";
import Service from "./views/Service";
import Testimonial from "./views/Testimonial";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [  
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/stock',
      name: 'Stock',
      component: Stock
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/testimonial',
      name: 'Testimonial',
      component: Testimonial
    },
      ]
});
