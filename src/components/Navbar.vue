<template>
  <div id="navbar">
    <TopNav />
    <div
      class="bottom-nav"
      :style="{ top: scrollPoint > 30 ? scrollPoint - scrollPoint : '' }"
      style="transition: 1s"
    >
      <div class="nav-brand">
        <h2><span style="color:#ee2625;">spicy</span>mandarin</h2>
      </div>
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2">About</el-menu-item>
        <el-menu-item index="4">Our Talents</el-menu-item>
        <el-menu-item index="4">Contact Us</el-menu-item>
        <!-- <span>{{ scrollPoint }}</span> -->
      </el-menu>
    </div>
  </div>
</template>
<script>
import TopNav from "@/components/TopNav.vue";
export default {
  props: ["scrollPoint"],
  components: {
    TopNav
  }
};
</script>
<style lang="scss">
#navbar {
  .bottom-nav {
    position: fixed;
    width: 100%;
    // padding: 0 40px;
    .nav-brand {
      padding-left: 40px;
      text-align: left;
      float: left;
      h2 {
        font-weight: 100;
        color: #f6f6f6;
        text-transform: uppercase;
      }
    }
    .el-menu {
      float: right;
      border: none;
      background: none;
      padding-right: 40px;
      .el-menu-item {
        font-size: 14px;
        color: #f6f6f6;
        text-transform: uppercase;
        font-weight: 300;
        &:hover {
          background: none;
          color: #ee2625;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
