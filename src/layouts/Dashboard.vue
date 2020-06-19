<template>
  <div id="DashboardLayout">
    <el-container>
      <el-header style="padding: 0;">
        <DashboardNavbar />
      </el-header>
      <el-container>
        <el-aside width="250px" style="background-color: #fff;">
          <Sidebar />
        </el-aside>
        <el-container>
          <el-main>
            <transition name="page" mode="out-in">
              <slot />
            </transition>
          </el-main>
          <el-footer>
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import DashboardNavbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import Footer from "../components/dashboard/Footer";
export default {
  components: {
    DashboardNavbar,
    Sidebar,
    Footer
  }
};
</script>
<style lang="scss">
#DashboardLayout {
  background: #f6f6f6;
  .el-main {
    margin: 2rem 1rem;
  }
}
</style>
