<template>
  <section id="Lessons" class="section">
    <el-row>
      <el-col :span="24">
        <div class="main-heading light">
          <h4>learn chinese mandarin</h4>
          <h2>our lessons</h2>
          <hr class="seperator" />
        </div>
      </el-col>
    </el-row>
    <div class="lesson-box">
      <el-row :gutter="20">
        <el-col :lg="12" :sm="24" :pull="0">
          <LessonContent
            heading="newbie"
            summary="Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Massa lacus, netus et commodo ipsum
            nisl. Fusce morbi quis vitae egestas. Vestibulum quis pellentesque
            lorem integer a auctor est nisi."
          />
        </el-col>
        <el-col :lg="12" :sm="24">
          <div class="lesson-video">
            <img
              src="../../assets/icons/video.svg"
              alt=""
              class="img-responsive"
            />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="lesson-box">
      <el-row :gutter="20">
        <el-col :lg="12" :sm="24">
          <div class="lesson-video">
            <img
              src="../../assets/icons/video.svg"
              alt=""
              class="img-responsive"
            />
          </div>
        </el-col>
        <el-col :lg="12" :sm="24" :pull="0">
          <LessonContent
            heading="beginner"
            summary="Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Massa lacus, netus et commodo ipsum
            nisl. Fusce morbi quis vitae egestas. Vestibulum quis pellentesque
            lorem integer a auctor est nisi."
          />
        </el-col>
      </el-row>
    </div>
    <div class="lesson-box">
      <el-row :gutter="20">
        <el-col :lg="12" :sm="24" :pull="0">
          <LessonContent
            heading="intermediate"
            summary="Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Massa lacus, netus et commodo ipsum
            nisl. Fusce morbi quis vitae egestas. Vestibulum quis pellentesque
            lorem integer a auctor est nisi."
          />
        </el-col>
        <el-col :lg="12" :sm="24">
          <div class="lesson-video">
            <img
              src="../../assets/icons/video.svg"
              alt=""
              class="img-responsive"
            />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="lesson-box">
      <el-row :gutter="20">
        <el-col :lg="12" :sm="24">
          <div class="lesson-video">
            <img
              src="../../assets/icons/video.svg"
              alt=""
              class="img-responsive"
            />
          </div>
        </el-col>
        <el-col :lg="12" :sm="24" :pull="0">
          <LessonContent
            heading="advanced"
            summary="Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Massa lacus, netus et commodo ipsum
            nisl. Fusce morbi quis vitae egestas. Vestibulum quis pellentesque
            lorem integer a auctor est nisi."
          />
        </el-col>
      </el-row>
    </div>
  </section>
</template>
<script>
import IconBox from "../../components/IconBox";
import LessonContent from "../../components/home/LessonContent";
export default {
  components: {
    IconBox,
    LessonContent
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#Lessons {
  margin-top: 70px;
  background-color: #393939;
  .lesson-box {
    padding: 3rem 0;
    .lesson-video {
      text-align: left;
    }
  }
}
</style>
