<template>
  <div class="home">
    <Navbar :scrollPoint="scrollPoint" />
    <SplashVideo />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SplashVideo from "@/components/home/SplashVideo.vue";

export default {
  name: "Home",
  data() {
    return {
      scrollPoint: ""
    };
  },
  components: {
    Navbar,
    SplashVideo
  },
  mounted() {
    var vm = this;
    window.addEventListener("scroll", function(e) {
      vm.scrollPoint = window.scrollY;
      console.log(this.scrollPoint);
    });
  },
  watch: {
    scrollPoint: function(val, oldval) {
      console.log(val, oldval);
    }
  }
};
</script>
