<template>
  <div id="header">
    <el-row>
      <el-col :span="24">
        <div class="header-content">
          <div class="middle-content">
            <h2>{{ pageName }}</h2>
          </div>
        </div>
        <div class="breadcrumbs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>{{ pageName }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  methods: {
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
#header {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000000 99.44%),
    linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0) 100%),
    url("../assets/images/header.jpg");
  background-position: center;
  background-size: cover;
  padding-inline: 20px 0;
  .header-content {
    display: table;
    width: 100%;
    height: 280px;
    .middle-content {
      h2 {
        color: $white;
        font-size: 36px;
        text-transform: uppercase;
        font-weight: 400;
      }
    }
  }
  .breadcrumbs {
    display: flex;
    justify-content: center;
    padding-bottom: 2em;
    .el-breadcrumb__item {
      span {
        color: #fff;
        text-transform: capitalize;
      }
    }
  }
}
</style>
