<template>
  <div class="review-lesson">
    <el-tabs type="border-card">
      <el-tab-pane label="Recap current lesson">
        <Recap />
      </el-tab-pane>
      <el-tab-pane label="test lessson">
        <Test />
      </el-tab-pane>
      <el-tab-pane label="COnnection game">
        <Game />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Recap from "./steps/Recap";
import Test from "./steps/Test";
import Game from "./steps/Game";
export default {
  components: {
    Recap,
    Test,
    Game
  }
};
</script>
<style lang="scss">
.el-tabs {
  border-radius: 5px;
  box-shadow: none;
  border: none;
  .el-tabs__header {
    background-color: transparent !important;
    .el-tabs__item:first-child {
      border-radius: 5px 0 0 0;
    }
    .el-tabs__item {
      height: 80px;
      line-height: 80px;
      font-size: 18px;
      text-transform: uppercase;
      width: 300px;
      &.is-active {
        background-color: $primary !important;
        color: $white !important;
        box-shadow: 0px 5px 16px rgba(238, 38, 37, 0.7);
        border: none;
      }
    }
  }
}
</style>
