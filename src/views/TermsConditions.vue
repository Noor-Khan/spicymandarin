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
            <p>
              These Website Standard Terms and Conditions written on this
              webpage shall manage your use of our website, SpicyMandarin
              accessible at spicymandarin.com.
            </p>
            <p>
              These Terms will be applied fully and affect to your use of this
              Website. By using this Website, you agreed to accept all terms and
              conditions written in here. You must not use this Website if you
              disagree with any of these Website Standard Terms and Conditions.
            </p>

            <p />
            <p>
              Minors or people below 18 years old are not allowed to use this
              Website.
            </p>
            <h3>Intellectual Property Rights</h3>
            <p>
              Other than the content you own, under these Terms, SpicyMandarin
              and/or its licensors own all the intellectual property rights and
              materials contained in this Website.
            </p>
            <p>
              You are granted limited license only for purposes of viewing the
              material contained on this Website.
            </p>
            <h3>Restrictions</h3>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>publishing any Website material in any other media;</li>
              <li>
                selling, sublicensing and/or otherwise commercializing any
                Website material;
              </li>
              <li>publicly performing and/or showing any Website material;</li>
              <li>
                using this Website in any way that is or may be damaging to this
                Website;
              </li>
              <li>
                using this Website in any way that impacts user access to this
                Website;
              </li>
              <li>
                using this Website contrary to applicable laws and regulations,
                or in any way may cause harm to the Website, or to any person or
                business entity;
              </li>
              <li>
                engaging in any data mining, data harvesting, data extracting or
                any other similar activity in relation to this Website;
              </li>
              <li>
                using this Website to engage in any advertising or marketing.
              </li>
            </ul>
            <p>
              Certain areas of this Website are restricted from being access by
              you and SpicyMandarin may further restrict access by you to any
              areas of this Website, at any time, in absolute discretion. Any
              user ID and password you may have for this Website are
              confidential and you must maintain confidentiality as well.
            </p>
            <h3>your content</h3>
            <p>
              In these Website Standard Terms and Conditions, “Your Content”
              shall mean any audio, video text, images or other material you
              choose to display on this Website. By displaying Your Content, you
              grant SpicyMandarin a non-exclusive, worldwide irrevocable, sub
              licensable license to use, reproduce, adapt, publish, translate
              and distribute it in any and all media.
            </p>
            <p>
              Your Content must be your own and must not be invading any
              third-party's rights. SpicyMandarin reserves the right to remove
              any of Your Content from this Website at any time without notice.
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
      color: $gray;
      line-height: 26px;
    }
    ul {
      li {
        color: $gray;
      }
    }
  }
}
</style>
