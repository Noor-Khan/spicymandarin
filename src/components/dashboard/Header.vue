<template>
  <div id="DashboardHeader" style="">
    <el-row>
      <el-col :lg="24">
        <div class="heading">
          <h2>{{ title }}</h2>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang="scss">
#DashboardHeader {
  background: linear-gradient(180deg, #202020 0%, rgba(32, 32, 32, 0) 100%),
    url("../../assets/images/headerbg.png");
  padding: 5rem 0;
  .heading {
    text-align: center;
    h2 {
      text-transform: uppercase;
      color: $white;
      letter-spacing: 1px;
    }
  }
}
</style>
