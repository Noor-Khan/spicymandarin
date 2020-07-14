<template>
  <div class="home">
    <SplashVideo />
    <Features />
    <Lessons />
    <RecentLessons />
    <NewsLetter />
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
import SplashVideo from "@/components/home/SplashVideo.vue";
import Features from "@/components/home/Features.vue";
import Lessons from "@/components/home/Lessons.vue";
import RecentLessons from "@/components/home/RecentLessons.vue";
import NewsLetter from "@/components/home/NewsLetter.vue";
import Donate from "@/components/global/Donate.vue";
import LargeFooter from "@/components/footer/LargeFooter.vue";
import BottomFooter from "@/components/footer/BottomFooter.vue";

export default {
  name: "Home",
  components: {
    // Navbar,
    SplashVideo,
    Features,
    Lessons,
    RecentLessons,
    NewsLetter,
    Donate,
    LargeFooter,
    BottomFooter
  }
};
</script>
