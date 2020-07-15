<template>
  <section id="Donate" class="section">
    <el-row>
      <el-col :span="24">
        <div class="donate-box">
          <div class="middle-content">
            <h4>appreciate our efforts and donate now!</h4>
            <h2>donate to <span>spicy</span>mandarin</h2>
            <DefaultButton text="donate now" link="/donate" />
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import DefaultButton from "../buttons/Default";
export default {
  components: {
    DefaultButton
  }
};
</script>
<style lang="scss">
#Donate {
  margin-top: 70px;
  background: #f6f6f6;
  padding: 30px 0;
  .donate-box {
    display: table;
    width: 100%;
    h4 {
      text-transform: uppercase;
      margin-bottom: 0;
      color: $gray;
      font-weight: 400;
    }
    h2 {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 32px;
      letter-spacing: 1px;
      margin-top: 5px;
      span {
        color: $primary;
      }
    }
    .el-button {
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      background: #fff;
    }
  }
}
</style>
