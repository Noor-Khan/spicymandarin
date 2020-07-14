import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/static/Home.vue";
import Newbie from "../views/dashboard/Newbie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About us",
    component: () => import("../views/static/About.vue")
  },
  {
    path: "/team",
    name: "our team",
    component: () => import("../views/static/Team.vue")
  },
  {
    path: "/contact",
    name: "contact us",
    component: () => import("../views/static/Contact.vue")
  },
  {
    path: "/donate",
    name: "donate us",
    component: () => import("../views/static/DonatePage.vue")
  },
  {
    path: "/privacy-policy",
    name: "privacy & policy",
    component: () => import("../views/static/PrivacyPolicy.vue")
  },
  {
    path: "/terms-conditions",
    name: "terms & conditions",
    component: () => import("../views/static/TermsConditions.vue")
  },
  {
    path: "/guidelines",
    name: "guidelines",
    component: () => import("../views/static/FAQ.vue")
  },
  {
    path: "/company-history",
    name: "company history",
    component: () => import("../views/static/History.vue")
  },
  {
    path: "/merchandize",
    name: "merchandize",
    component: () => import("../views/static/Merchandize.vue")
  },
  {
    path: "/register",
    name: "sign up",
    meta: {
      layout: "blank"
    },
    component: () => import("../views/static/Signup.vue")
  },
  {
    path: "/signin",
    name: "sign in",
    meta: {
      layout: "blank"
    },
    component: () => import("../views/static/Signin.vue")
  },
  // DASHBOARD PAGES

  {
    path: "/dashboard/Overview",
    name: "overview",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/Overview.vue")
  },
  {
    path: "/dashboard/courses/newbie",
    name: "newbie",
    meta: {
      layout: "dashboard"
    },
    component: Newbie
  },
  {
    path: "/dashboard/courses/beginner",
    name: "beginner",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/Beginner.vue")
  },
  {
    path: "/dashboard/courses/intermediate",
    name: "intermediate",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/Intermediate.vue")
  },
  {
    path: "/dashboard/courses/advanced",
    name: "advanced",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/Advanced.vue")
  },
  {
    path: "/dashboard/lessons-history",
    name: "lessons history",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/LessonsHistory.vue")
  },
  {
    path: "/dashboard/explore-lessons",
    name: "explore lessons",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/ExploreLessons.vue")
  },
  {
    path: "/dashboard/saved-lessons",
    name: "saved lessons",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/SavedLessons.vue")
  },
  {
    path: "/dashboard/profile",
    name: "profile",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/Profile.vue")
  },
  {
    path: "/dashboard/settings",
    name: "settings",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/Settings.vue")
  },
  {
    path: "/dashboard/help",
    name: "help",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/Help.vue")
  },
  {
    path: "/dashboard/feedback",
    name: "feedback",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/Feedback.vue")
  },
  {
    path: "/dashboard/donate",
    name: "donate",
    meta: {
      layout: "dashboard"
    },
    component: () => import("../views/dashboard/Donate.vue")
  },
  {
    path: "*",
    name: "404",
    meta: {
      layout: "blank"
    },
    component: () => import("../views/static/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
});

export default router;
