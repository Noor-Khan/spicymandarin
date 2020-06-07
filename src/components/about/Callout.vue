<template>
  <section id="Callout" class="section">
    <div class="overlay"></div>
    <el-row>
      <el-col :span="24">
        <div class="callout-box">
          <div class="middle-content">
            <h4>let's begin with the first lesson</h4>
            <h2>what are you waiting for</h2>
            <DefaultButton text="let's get started" link="/register" />
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
#Callout {
  position: relative;
  margin-top: 70px;
  background-image: url("../../assets/images/calloutbg.jpg");
  background-size: cover;
  background-position: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(124, 2, 2, 0.67),
      rgba(124, 2, 2, 0.67)
    );
  }
  .callout-box {
    display: table;
    width: 100%;
    padding: 20px 0;
    .middle-content {
      color: $white;
      h4 {
        margin-bottom: 0;
        color: $light-gray;
        font-size: 18px;
        text-transform: uppercase;
      }
      h2 {
        margin-top: 5px;
        font-size: 36px;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }
}
</style>
