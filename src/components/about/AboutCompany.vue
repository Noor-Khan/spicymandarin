<template>
  <section id="AboutCompany" class="section">
    <el-row>
      <el-col :lg="14">
        <div class="about-content">
          <div class="main-heading">
            <h4>about spicymandarin</h4>
            <h2>what is new here?</h2>
            <hr class="seperator" />
          </div>
          <div class="about-para">
            <p>
              All our SexyMandarin team members have hands on experience in
              learning Mandarin, and we came to a conclusion that the
              traditional textbook method of teaching is not the way to go about
              learning this language.
            </p>
            <p>
              Many students get overwhelmed when they see the Chinese characters
              in their course materials and their brain automatically shuts off
              from learning the language.
            </p>
            <p>
              We believe that being able to master spoken Chinese is more
              important than being able to write, and have focused our learning
              materials with emphasis on tones, and vocabularies not from
              ordinary textbooks but ones that are commonly used in today’s
              Chinese spoken language.
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
