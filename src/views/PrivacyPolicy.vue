<template>
  <div id="Privacy">
    <PageHeader />
    <section id="PrivacyPolicy" class="section">
      <el-row>
        <el-col :lg="16">
          <div class="main-heading">
            <h4>our privacy and policies</h4>
            <h2>Privacy & Policy</h2>
            <hr class="seperator" />
          </div>
          <div class="policy-content">
            <h3>What information do we collect?</h3>
            <hr class="sep" />
            <p>
              dolor sit amet consectetur adipisicing elit. Fugit aliquam
              sapiente, sint at ipsum aut qui eos, repudiandae fuga suscipit
              hic! Voluptatibus suscipit voluptas non est nobis eius tempora
              exercitationem. Dolor sit amet consectetur adipisicing elit. Fugit
              aliquam sapiente, sint at ipsum aut qui eos, repudiandae fuga
              suscipit hic! Voluptatibus suscipit voluptas non est nobis eius
              tempora exercitationem. Dolor sit amet consectetur adipisicing
              elit. Fugit aliquam sapiente, sint at ipsum aut qui eos,
              repudiandae fuga suscipit hic! Voluptatibus suscipit voluptas non
              est nobis eius tempora exercitationem.
            </p>
            <h3>What do we use your information for?</h3>
            <hr class="sep" />
            <p>
              dolor sit amet consectetur adipisicing elit. Fugit aliquam
              sapiente, sint at ipsum aut qui eos, repudiandae fuga suscipit
              hic! Voluptatibus suscipit voluptas non est nobis eius tempora
              exercitationem. Dolor sit amet consectetur adipisicing elit. Fugit
              aliquam sapiente, sint at ipsum aut qui eos, repudiandae fuga
              suscipit hic! Voluptatibus suscipit voluptas non est nobis eius
              tempora exercitationem. Dolor sit amet consectetur adipisicing
              elit. Fugit aliquam sapiente, sint at ipsum aut qui eos,
              repudiandae fuga suscipit hic! Voluptatibus suscipit voluptas non
              est nobis eius tempora exercitationem.
            </p>
            <h3>What information do we collect?</h3>
            <hr class="sep" />
            <p>
              dolor sit amet consectetur adipisicing elit. Fugit aliquam
              sapiente, sint at ipsum aut qui eos, repudiandae fuga suscipit
              hic! Voluptatibus suscipit voluptas non est nobis eius tempora
              exercitationem. Dolor sit amet consectetur adipisicing elit. Fugit
              aliquam sapiente, sint at ipsum aut qui eos, repudiandae fuga
              suscipit hic! Voluptatibus suscipit voluptas non est nobis eius
              tempora exercitationem. Dolor sit amet consectetur adipisicing
              elit. Fugit aliquam sapiente, sint at ipsum aut qui eos,
              repudiandae fuga suscipit hic! Voluptatibus suscipit voluptas non
              est nobis eius tempora exercitationem.
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
#PrivacyPolicy {
  margin-top: 70px;
  background-image: url("../assets/icons/privacy.png");
  background-repeat: no-repeat;
  background-position: center right;
  .main-heading {
    text-align: left;
    margin-bottom: 20px;
    .seperator {
      margin: 15px 0;
    }
    h2 {
      font-weight: 400;
    }
  }
  .policy-content {
    margin-top: 4rem;
    text-align: left;
    h3 {
      text-transform: uppercase;
    }
    p {
      color: $gray;
      line-height: 26px;
    }
  }
  .privacy-img {
    position: relative;
    img {
      position: absolute;
      top: 50%;
    }
  }
}
</style>
