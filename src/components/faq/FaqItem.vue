<template>
  <el-collapse-item :name="name">
    <template slot="title">
      <i class="header-icon el-icon-info"></i>
      {{ title }}
    </template>
    <p>
      {{ para }}
    </p>
  </el-collapse-item>
</template>
<script>
export default {
  props: {
    title: String,
    name: Number,
    para: String
  }
};
</script>
