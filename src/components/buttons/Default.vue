<template>
  <el-button>{{ text }}</el-button>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.el-button {
  background-color: $white;
  color: $black;
  border-radius: 40px;
  height: 55px;
  width: 240px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 300;
  &:hover {
    background: $primary;
    border-color: $primary;
    color: $white;
    box-shadow: 0px 5px 20px 0px $primary;
  }
}
</style>
