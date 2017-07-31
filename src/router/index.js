/* eslint-disable no-new */

import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource'
import Proxy from 'http-proxy-middleware';

import MainView from 'views/main-view/MainView.vue';
import ProjectView from 'views/project-view/ProjectView.vue';
import AboutView from 'views/about-view/AboutView.vue';
import DashboardView from 'views/dashboard-view/template.vue';

Vue.use(Router);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

Vue.http.options.credentials = true;
Vue.http.options.xhr = {withCredentials: true};
Vue.http.headers.common['Accept'] = 'application/json';
Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080';

// Vue.http.interceptors.push((request, next) => {
//     request.credentials = true;
//     next();
// });

export default new Router({
  routes: [
    {
      path: '/',
      component: MainView,
    },
    {
      path: '/project/:id',
      component: ProjectView,
    },
    {
      path: '/about/',
      component: AboutView,
    },
    {
      path:'/dashboard/',
      component: DashboardView,
    }
  ],
  scrollBehavior (to, from) {
    return {
      x: 0,
      y: 0
    };
  },
});
