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
            <slot />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import DashboardNavbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
export default {
  components: {
    DashboardNavbar,
    Sidebar
  }
};
</script>
<style lang="scss">
#DashboardLayout {
  background: #f6f6f6;
}
</style>
