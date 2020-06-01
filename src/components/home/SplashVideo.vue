<template>
  <section id="SplashVideo">
    <el-row>
      <el-col :span="24">
        <div class="content-wrapper">
          <div class="main-content">
            <h2><span style="color:#ee2625">spicy</span>mandarin</h2>
            <h4>unconventional way or method of teaching Mandarin</h4>
            <DefaultButton text="Let's get started" />
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
  clear: both;
  height: 100vh;
  background-image: url("../../assets/images/videoimg.jpg");
  .content-wrapper {
    display: table;
    width: 100%;
    height: 100vh;
    .main-content {
      display: table-cell;
      vertical-align: middle;
      text-transform: uppercase;
      h2 {
        font-size: 48px;
        font-family: "Rosarivo";
        letter-spacing: 16px;
        font-weight: 400;
        margin-bottom: 0;
      }
      h4 {
        margin-top: 0;
        font-size: 14px;
        color: #fff;
        font-weight: 100;
        letter-spacing: 4.5px;
      }
      button {
        margin-top: 40px;
      }
    }
  }
}
</style>
