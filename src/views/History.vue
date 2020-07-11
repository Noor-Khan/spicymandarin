<template>
  <div id="Terms">
    <PageHeader />
    <section id="TermsConditions" class="section">
      <el-row>
        <el-col>
          <div class="main-heading">
            <h4>about spicymandarin history</h4>
            <h2>Company history</h2>
            <hr class="seperator" />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="16">
          <div class="terms-box">
            <h3>Introduction</h3>
            <p>
              SexyMandarin is an educational institution that uses
              unconventional but memorable methods in teaching Mandarin to our
              passionate students with our sexy celebrity teachers.
            </p>
            <p>
              SexyMandarin started off with a group of people who had a fun idea
              of shooting sexy Chinese girls that could teach Mandarin Chinese
              in short 2 minute clips. After editing the clip, we decided to
              post our first video, “Lesson 1: What time is it?” on youtube
              where it became viral.
            </p>
            <p>
              The project has been featured in various publications from “The
              Daily Telegraph” to “Huffington Post”, and even mentioned by Jimmy
              Falllon, in his U.S. prime time show. With it’s popularity, the
              SexyMandarin youtube channel has over 2 million hits and counting.
            </p>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import PageHeader from "../components/Header";
export default {
  components: {
    PageHeader
  }
};
</script>
<style lang="scss">
#TermsConditions {
  margin-top: 70px;
  .terms-box {
    text-align: left;
    h3 {
      text-transform: uppercase;
      margin-top: 30px;
    }
    p {
      color: $black;
      line-height: 26px;
    }
  }
}
</style>
