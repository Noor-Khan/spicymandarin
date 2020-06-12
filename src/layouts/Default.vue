<template>
  <div>
    <Navbar :scrollPoint="scrollPoint" />
    <main class="main">
      <transition name="fade" mode="out-in">
        <slot />
      </transition>
    </main>
    <Donate />
    <LargeFooter />
    <BottomFooter />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import LargeFooter from "../components/footer/LargeFooter";
import BottomFooter from "../components/footer/BottomFooter";
export default {
  components: {
    Navbar,
    Donate,
    LargeFooter,
    BottomFooter
  },
  data() {
    return {
      scrollPoint: ""
    };
  },
  mounted() {
    var vm = this;
    window.addEventListener("scroll", function(e) {
      vm.scrollPoint = window.scrollY;
    });
  },
  watch: {
    scrollPoint: function(val, oldval) {
      return val, oldval;
    }
  }
};
</script>
