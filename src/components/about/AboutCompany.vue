<template>
  <section id="AboutCompany" class="section">
    <el-row>
      <el-col :lg="14">
        <div class="about-content">
          <div class="main-heading">
            <h4>about spicymandarin</h4>
            <h2>what is spicymandarin?</h2>
            <hr class="seperator" />
          </div>
          <div class="about-para">
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
        </div>
      </el-col>
      <el-col :lg="10">
        <div class="about-video">
          <div class="middle-content">
            <img
              src="../../assets/icons/video.svg"
              alt=""
              class="img-responsive"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
#AboutCompany {
  margin-top: 70px;
  padding-left: 0;
  padding-top: 0;
  background-color: $dark-gray;
  .about-content {
    padding: 20px 80px;
    text-align: left;
    .main-heading {
      h2 {
        color: $white;
      }
      .seperator {
        margin: 15px 0;
      }
    }
    .about-para {
      padding-top: 10px;
      padding-bottom: 40px;
      p {
        font-size: 16px;
        color: #f6f6f6;
        letter-spacing: 0.4px;
        line-height: 26px;
      }
    }
  }
  .about-video {
    display: table;
    text-align: right;
    height: 500px;
  }
}
</style>
