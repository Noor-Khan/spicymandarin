import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    lessonLink: "",
    lessons: {
      newbie: [
        {
          title: "Quaerat illum voluptatem omnis magnam",
          description:
            "Culpa dicta nostrum a corrupti. Quaerat illum voluptatem omnis magnam vitae obcaecati nemo voluptatum nesciunt asperiores officiis",
          category: "newbie",
          subCategory: "reservation",
          img: "/images/videoimg.jpg",
          videoId: "#"
        },
        {
          title: "Quaerat illum voluptatem omnis magnam",
          description:
            "Culpa dicta nostrum a corrupti. Quaerat illum voluptatem omnis magnam vitae obcaecati nemo voluptatum nesciunt asperiores officiis",
          category: "newbie",
          subCategory: "order food",
          img: "/images/videoimg.jpg",
          videoId: "#"
        },
        {
          title: "Quaerat illum voluptatem omnis magnam",
          description:
            "Culpa dicta nostrum a corrupti. Quaerat illum voluptatem omnis magnam vitae obcaecati nemo voluptatum nesciunt asperiores officiis",
          category: "newbie",
          subCategory: "apartment",
          img: "/images/videoimg.jpg",
          videoId: "#"
        },
        {
          title: "Quaerat illum voluptatem omnis magnam",
          description:
            "Culpa dicta nostrum a corrupti. Quaerat illum voluptatem omnis magnam vitae obcaecati nemo voluptatum nesciunt asperiores officiis",
          category: "newbie",
          subCategory: "travel",
          img: "/images/videoimg.jpg",
          videoId: "#"
        }
      ],
      beginner: [
        {
          title: "Quaerat illum voluptatem omnis magnam",
          description:
            "Culpa dicta nostrum a corrupti. Quaerat illum voluptatem omnis magnam vitae obcaecati nemo voluptatum nesciunt asperiores officiis",
          category: "beginner",
          subCategory: "reservation",
          img: "/images/videoimg.jpg",
          videoId: "#"
        },
        {
          title: "Quaerat illum voluptatem omnis magnam",
          description:
            "Culpa dicta nostrum a corrupti. Quaerat illum voluptatem omnis magnam vitae obcaecati nemo voluptatum nesciunt asperiores officiis",
          category: "beginner",
          subCategory: "order food",
          img: "/images/videoimg.jpg",
          videoId: "#"
        },
        {
          title: "Quaerat illum voluptatem omnis magnam",
          description:
            "Culpa dicta nostrum a corrupti. Quaerat illum voluptatem omnis magnam vitae obcaecati nemo voluptatum nesciunt asperiores officiis",
          category: "beginner",
          subCategory: "travel",
          img: "/images/videoimg.jpg",
          videoId: "#"
        },
        {
          title: "Quaerat illum voluptatem omnis magnam",
          description:
            "Culpa dicta nostrum a corrupti. Quaerat illum voluptatem omnis magnam vitae obcaecati nemo voluptatum nesciunt asperiores officiis",
          category: "beginner",
          subCategory: "apartment",
          img: "/images/videoimg.jpg",
          videoId: "#"
        }
      ]
    }
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    lessonLink(state) {
      return state.lessonLink;
    },
    newbie(state) {
      return state.lessons.newbie;
    },
    beginner(state) {
      return state.lessons.beginner;
    }
  },
  mutations: {
    getLessons(state, payload) {
      state.lessonLink = payload;
      state.isLoading = true;
      console.log("link: ", payload);
    }
  },
  actions: {
    loadLessons({ commit }) {
      axios
        .get(
          "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLHfaYaxo6-wgDnOG06IolEssDQmyj06fC&key=AIzaSyABNLFge3Vp1gWHql4A-gpsGTcrnvrwUPg"
        )
        .then(response => {
          var result = response.data.items;
          commit("getLessons", result);
        });
    }
  },
  modules: {}
});
