<template>
  <section id="Features" class="section">
    <el-row>
      <el-col :span="24">
        <div class="main-heading">
          <h4>features of spicymandarin</h4>
          <h2>why choose us</h2>
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
  </section>
</template>
<script>
import IconBox from "../IconBox";
export default {
  components: {
    IconBox
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
