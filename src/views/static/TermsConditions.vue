<template>
  <div id="Terms">
    <PageHeader />
    <section id="TermsConditions" class="section">
      <el-row>
        <el-col>
          <div class="main-heading">
            <h4>terms & Conditions for spicymandarin</h4>
            <h2>Terms & Conditions</h2>
            <hr class="seperator" />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="16">
          <div class="terms-box">
            <h3>Introduction</h3>
            <p>Last Update: 03 April 2013</p>
            <h3>Schedule</h3>
            <p>
              We reserve the right to change the scheduled teacher for all
              lessons.
            </p>
            <h3>Fair Use Policy</h3>
            <p>
              SexyMandarin reserves the right to limit group lessons for heavy
              users. If you have been temporarily locked out of group lessons,
              you will receive an email notification stating why and how to
              rectify the situation.
            </p>
            <p>
              All packages reset every month. Private & group lesson credits do
              not roll over month to month.
            </p>
            <p>
              Terms and Conditions can change at any time.
            </p>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import PageHeader from "../../components/global/Header";
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
