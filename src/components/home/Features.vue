<template>
  <section id="Features">
    <el-row>
      <el-row>
        <el-col :span="24">
          <div class="main-heading">
            <h4>why should you learn here</h4>
            <h2>our features</h2>
            <hr class="seperator" />
          </div>
        </el-col>
      </el-row>
      <div class="feature-boxes">
        <el-row :gutter="15">
          <el-col
            :lg="8"
            :sm="12"
            :xs="24"
            v-for="(feature, index) in features"
            :key="index"
          >
            <IconBox
              :heading="feature.heading"
              :iconUrl="feature.iconUrl"
              :summary="feature.summary"
            />
          </el-col>
        </el-row>
      </div>
      <el-col :span="24">
        <div class="feature-btn">
          <DefaultBtn text="view more" link="/about" />
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import IconBox from "../../components/IconBox";
import DefaultBtn from "../../components/buttons/Default";
export default {
  components: {
    IconBox,
    DefaultBtn
  },
  data() {
    return {
      features: [
        {
          heading: "easy way to learn",
          iconUrl: "/images/icons/feature.svg",
          summary:
            "Diam consequat vestibulum ut vulputate. Iaculis lacinia aliquet vel dignissim sodales non sed lacinia aliquet vel dignissim lacinia."
        },
        {
          heading: "easy way to learn",
          iconUrl: "/images/icons/feature.svg",
          summary:
            "Diam consequat vestibulum ut vulputate. Iaculis lacinia aliquet vel dignissim sodales non sed lacinia aliquet vel dignissim lacinia."
        },
        {
          heading: "easy way to learn",
          iconUrl: "/images/icons/feature.svg",
          summary:
            "Diam consequat vestibulum ut vulputate. Iaculis lacinia aliquet vel dignissim sodales non sed lacinia aliquet vel dignissim lacinia."
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#Features {
  margin-top: 70px;
  padding: 20px 40px;
  .feature-boxes {
    padding: 3rem 0;
  }
  .feature-btn {
    margin: 4rem 0;
  }
}
</style>
