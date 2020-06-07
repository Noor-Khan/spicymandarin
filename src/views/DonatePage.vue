<template>
  <div id="DonatePage">
    <PageHeader />
    <section id="DonateUs" class="section">
      <el-row>
        <el-col :span="24">
          <div class="donate-box">
            <el-button>
              <img src="../assets/icons/paypal.svg" alt="" />
            </el-button>
            <h3>or</h3>
            <el-button>pay with credit card</el-button>
            <br />
            <img src="../assets/icons/master-card.svg" alt="" />
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
#DonateUs {
  margin-top: 70px;
  .donate-box {
    padding: 2rem 0;
    h3 {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 400;
    }
    button {
      height: 70px;
      width: 320px;
      border-radius: 40px;
      font-size: 18px;
      line-height: 0;
      text-transform: uppercase;
      font-weight: 400;
      &:hover {
        border-color: #ecbe37;
        background-color: #ecbe37;
        box-shadow: 0px 4px 10px 0 #ecbe37;
      }
    }
    button:nth-child(3) {
      margin-bottom: 10px;
      &:hover {
        background-color: #159fdf;
        color: $white;
        border-color: #159fdf;
        box-shadow: 0px 4px 10px 0 #159fdf;
      }
    }
  }
}
</style>
