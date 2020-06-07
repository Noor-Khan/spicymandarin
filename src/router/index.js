import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About us",
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/team",
    name: "our team",
    component: () => import( /* webpackChunkName: "about" */ '../views/Team.vue')
  },
  {
    path: "/contact",
    name: "contact us",
    component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: "/donate",
    name: "donate us",
    component: () => import( /* webpackChunkName: "about" */ '../views/DonatePage.vue')
  },
  {
    path: "/privacy-policy",
    name: "privacy & policy",
    component: () => import( /* webpackChunkName: "about" */ '../views/PrivacyPolicy.vue')
  },
  {
    path: "/terms-conditions",
    name: "terms & conditions",
    component: () => import( /* webpackChunkName: "about" */ '../views/TermsConditions.vue')
  },
  {
    path: '/register',
    name: 'sign up',
    meta: {
      layout: 'blank'
    },
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/signin',
    name: 'sign in',
    meta: {
      layout: 'blank'
    },
    component: () => import('../views/Signin.vue')
  },
  // DASHBOARD PAGES

  {
    path: "/dashboard/:id",
    name: "overview",
    meta: {
      layout: 'dashboard'
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/dashboard/Overview.vue'),
    children: [{
      path: 'newbie',
      name: 'newbie',
      meta: {
        layout: 'dashboard'
      },
      component: () => import( /* webpackChunkName: "about" */ '../views/dashboard/Newbie.vue')
    }, ]
  },
  {
    path: "*",
    name: "404",
    meta: {
      layout: 'blank'
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/404.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
