import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    courseLessons: ""
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    courseLessons(state) {
      return state.courseLessons;
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
      state.courseLessons = payload;
      state.isLoading = true;
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
          console.log(response);
        });
    }
  },
  modules: {}
});
