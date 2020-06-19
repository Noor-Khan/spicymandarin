<template>
  <div class="general-card" :style="{ 'background-image': `url(${img})` }">
    <div class="card-header">
      <i class="el-icon-collection-tag"></i>
    </div>
    <div class="card-footer">
      <div class="title">
        {{ title }}
      </div>
      <div class="category">
        {{ category }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    category: String,
    img: String
  }
};
</script>
<style lang="scss">
.general-card {
  background-position: center;
  background-size: cover;
}
</style>
