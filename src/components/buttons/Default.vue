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
  color: $black;
  border-radius: 40px;
  height: 55px;
  border-color: $light-gray;
  padding: 5px 45px;
  font-size: 16px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  font-weight: 400;
  &.primary {
    background-color: $primary;
    border-color: $primary;
    color: $white;
  }
  i,
  svg {
    margin-right: 20px;
    font-size: 22px;
    color: $primary;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    background: $primary !important;
    border-color: $primary !important;
    color: $white;
    box-shadow: 0px 5px 20px 0px $primary !important;
    i,
    svg {
      color: $white;
    }
  }
}
</style>
