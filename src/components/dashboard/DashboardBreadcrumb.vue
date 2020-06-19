<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/dashboard/overview' }"
      >Dashboard</el-breadcrumb-item
    >
    <el-breadcrumb-item>{{ this.$route.name }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style lang="scss">
.el-breadcrumb {
  .el-breadcrumb__item {
    text-transform: capitalize;
  }
}
</style>
