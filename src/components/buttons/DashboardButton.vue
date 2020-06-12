<template>
  <router-link :to="link">
    <el-button :class="btnType">
      <i :class="icon"></i>
      {{ text }}</el-button
    >
  </router-link>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    },
    link: {
      type: String,
      default: "#"
    },
    btnType: {
      type: String
    },
    icon: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.el-button {
  background-color: $white;
  color: $primary;
  border-radius: 40px;
  height: 55px;
  border: none;
  padding: 5px 45px;
  font-size: 16px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  font-weight: bold;
  box-shadow: 0px 4px 8px #f7f7f7;
  &:hover {
    background: $primary !important;
    border-color: $primary !important;
    color: $white;
    box-shadow: 0px 5px 20px 0px $primary !important;
  }
}
</style>
