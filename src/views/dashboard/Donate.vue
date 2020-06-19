<template>
  <div id="DashboardDonate">
    <Header title="donate us" />
    <div class="donate-box">
      <el-row>
        <el-col :lg="24">
          <div class="donate-buttons">
            <el-button class="paypal">
              <img src="../../assets/icons/paypal.svg" alt="" />
            </el-button>
            <h4>or</h4>
            <el-button class="credit-card">
              pay with credit card
            </el-button>
            <br />
            <img src="../../assets/icons/creditCard.svg" alt="" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Header from "../../components/dashboard/Header";
export default {
  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#DashboardDonate {
  .donate-box {
    padding: 3rem 2rem;
    text-align: center;
    border-radius: 5px;
    background-color: $white;
    margin: 2rem 0;
    .donate-buttons {
      h4 {
        margin: 20px 0;
        font-size: 18px;
        font-weight: bold;
        color: $black;
      }
      .el-button {
        width: 300px;
        border-radius: 40px;
        height: 70px;
      }
      .paypal {
        background-color: #ecbe37;
        border-color: #ecbe37;
        box-shadow: none;
        &:hover {
          box-shadow: 0px 4px 10px rgba(236, 190, 55, 0.8);
        }
      }
      .credit-card {
        background-color: #f6f6f6;
        color: $black;
        border-color: #f6f6f6;
        text-transform: uppercase;
        font-weight: bold;
        box-shadow: none;
        font-size: 18px;
        &:hover {
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>
