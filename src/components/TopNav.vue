<template>
  <el-menu class="el-menu top-navbar" mode="horizontal">
    <ul class="menu-list">
      <el-menu-item index="1">
        <span>
          <img src="../assets/icons/user.svg" alt="" />
        </span>
        Register</el-menu-item
      >
      <el-menu-item index="2">
        <img src="../assets/icons/unlock.svg" alt="" />

        Login</el-menu-item
      >
      <span class="pipe">|</span>
      <div class="social-list"></div>
    </ul>
  </el-menu>
</template>
<script>
export default {};
</script>
<style lang="scss">
.top-navbar {
  height: 38px;
  padding: 0 40px;
  background: #202020;
  border-bottom: transparent !important;
  color: #f6f6f6;
  .menu-list {
    display: flex;
    flex-direction: row-reverse;
    .el-menu-item {
      line-height: 38px;
      height: 38px;
      padding: 0 15px;
      color: #f6f6f6;
      font-size: 14px;
      span {
        img {
          margin-bottom: 5px;
          width: 18px;
        }
      }
      &:hover {
        background: none;
        color: #ee2625;
        span {
          img {
            fill: #ee2625;
          }
        }
      }
    }
    .pipe {
      color: #696969;
      font-size: 24px;
      margin-top: 2px;
    }
  }
}
</style>
