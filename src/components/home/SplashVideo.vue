<template>
  <section id="SplashVideo">
    <div class="overlay"></div>
    <LazyYoutubeVideo
      :autoplay="true"
      src="https://www.youtube.com/embed/5v_ICyzqZ5g?rel=0&loop=1&autoplay=1&playlist=5v_ICyzqZ5g"
    >
    </LazyYoutubeVideo>
    <el-row>
      <el-col :span="24">
        <div class="content-wrapper">
          <div class="middle-content">
            <h2><span style="color:#ee2625">spicy</span>mandarin</h2>
            <h4>unconventional way or method of teaching Mandarin</h4>
            <DefaultButton text="Let's get started" link="/register" />
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import DefaultButton from "../buttons/Default";
export default {
  components: {
    DefaultButton
  }
};
</script>
<style lang="scss">
#SplashVideo {
  position: relative;
  clear: both;
  height: 100vh;
  background-image: url("../../assets/images/videoimg.jpg");
  background-position: center;
  background-size: cover;
  .overlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(255, 255, 255, 0) 100%
    ) !important;
  }
  .y-video {
    position: absolute;
    width: 100%;
    z-index: 0;
  }
  .content-wrapper {
    display: table;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100vh;
    .middle-content {
      padding: 10px 20px;
      h2 {
        font-size: 48px;
        font-family: "Rosarivo";
        letter-spacing: 16px;
        font-weight: 400;
        margin-bottom: 0;
        color: $white;
        text-transform: uppercase;
        @media (max-width: 800px) {
          font-size: 32px;
          letter-spacing: 8px;
          font-weight: 600;
        }
      }
      h4 {
        margin-top: 0;
        font-size: 16px;
        color: #fff;
        font-weight: 100;
        text-transform: uppercase;
        letter-spacing: 3.3px;
        @media (max-width: 800px) {
          letter-spacing: 1px;
          text-transform: unset;
        }
      }
      button {
        margin-top: 40px;
      }
    }
  }
}
</style>
